FROM node:12-alpine AS builder
MAINTAINER ZhangLe<zhanglenus@gmail.com>
WORKDIR /app

# install dependencies
COPY package.json package-lock.json /app/
RUN npm ci

# run build
COPY . .
RUN npm run build

FROM nginx:alpine

WORKDIR /app
RUN mkdir dist

# copy build result from previous stage
COPY --from=builder /app/dist ./dist

# copy nginx config
# COPY ./default.conf /etc/nginx/conf.d
COPY ./nginxDemo.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]