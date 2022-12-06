#!/bin/bash
sudo docker build -t judger:latest -f ./docker/Dockerfile .
CONTAINER_ID=$(sudo docker ps -a -f name=judger --format "{{.ID}}")
if [ -n $CONTAINER_ID ]; then
    sudo docker stop $CONTAINER_ID
    sudo docker rm $CONTAINER_ID
fi
sudo docker run -d -m 2g --name judger judger:latest

NEW_CONTAINER_ID=$(sudo docker ps -a -f name=judger --format "{{.ID}}")

sudo docker exec -it $NEW_CONTAINER_ID /bin/bash