---
sidebar_position: 1
---

# 快速安装并接入设备


本章节将指导您快速安装ThingsPanel，并实现接入设备，查看设备数据。
## 先决条件
* 需要先安装好Docker（[安装docker社区版](https://docs.docker.com/engine/installation/)）
* DockerCompose（[安装Docker Compose](https://docs.docker.com/compose/install/)）
* Git
* 使用MQTT模拟器，可使用MQTTbox、MQTT X、 MQTT.fx ，或者使用设备推送数据。

:::info

可参考[`Docker安装环境搭建`](./system-installation/docker_installation)案例。

:::

## 通过Docker容器安装ThingsPanel

通过容器化部署是搭建ThingsPanel的最快方式。

```bash title="第一步、获取docker-compose源码:" showLineNumbers
git clone https://github.com/ThingsPanel/thingspanel-docker.git
```

```bash title="第二步、进入目录并启动服务:" showLineNumbers
cd thingspanel-docker&&docker-compose -f docker-compose.yml up
```

```text title="第三步、登录:" showLineNumbers
输入网址:服务器IP:8080
系统管理员：super@super.cn / 123456
租户管理员：tenant@tenant.cn / 123456
```

:::info

更详细的`步骤`请参考[`Docker安装`](./system-installation/docker_installation)。

:::

## 设备接入与查看数据的步骤
:::info

- 添加设备：可选择是否需要绑定设备配置模板。
- 推送数据：使用系统提供的推送参数推送设备数据。
- 查看数据：在设备详情或者看板查看数据。 

:::
## 15秒接入一个设备并查看数据
<video controls src="15s_add_device.mp4" title="Title"></video>



* Mosquitto MQTT 客户端是一款轻量级的消息发布和订阅系统，支持MQTT协议，用于设备间的通信。




:::info

mqtt客户端工具推荐：[`点击下载mqtt.fx工具`](https://file.bemfa.com/hw/zip/mqtt/mqttfx1.7.1_windows_64.exe)  [`点击下载mqttx`](https://mqttx.app/)  
工具使用推荐参考文档：[`点击浏览`](https://cloud.tencent.com/developer/article/1662831)

:::


