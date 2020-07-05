# Frontend of Game Monopoly

Backend API Version: /v1  
Entry Prod: localhost:8080

# deploy pipeline
docker pull 20170327/monolopyfe:latest  
docker run --name mygohttp -p 8080:80 -d 20170327/monolopyfe  [lcoalport:dockerport]
