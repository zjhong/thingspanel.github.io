---
sidebar_position: 2
---

# Docker Installation

## Almalinux (centos) installation of docker and git
```
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker.service
sudo systemctl enabling docker. ervice
sudo docker version
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
dnf install git
```

## Pull Things Panel-go-docker

```
git clone https://github.com/ThingsPanel/thingsPanel-go-docker.git
cd thingsPanel-go-docker
```


## Run Project

Start Project in Front Office

 ``` 
 docker-compose -f docker-compose.yml up
 ```

Launch project in background

``` 
docker-compose -f docker-compose.yml up -d
```

Stop Service

```
 dock-compose -f docker-compose.yml down
 ```

## Front Office Access
```
- Address：:8080
- Username：admin@thisspanel.cn
- Password：123456
```