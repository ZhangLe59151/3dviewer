# Frontend of 3D viewer APP

Backend API Version: /v1  
Entry Prod: localhost:8080

# deploy pipeline
docker pull 20170327/3dviewer:latest  
docker run --name 3dviewerdocker -p 8000:80 -d 20170327/3dviewer  [lcoalport:dockerport]

# transfer model format
obj2gltf -i model.obj -o model.gltf
