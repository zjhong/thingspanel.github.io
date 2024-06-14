---
sidebar_position: 15
---

#  SGP30接入

## 1、 SGP30介绍
- SGP30是一个数字化多像表气体传感器平台，专为轻松集成到空气净化器、按需新风控制和物联网应用中而设计。SGP30
设计用于智能家居、家电和物联网应用，它提供两个经过校准的空气质量信号和湿度补偿功能.SGP30
可提供有关空气质量的更详尽指数。针对现实生活环境中的污染气体，该传感器具有无与伦比的可靠性，可以实现独一无的长期稳定性和低漂移
- SGP30是一款二氧化碳（CO2）和有机化合物（TVOC）气体传感器模块，它可以通过检测环境中的CO2和TVOC浓度来实现空气质量监测和控制。
![descript](./images/image14.png)
![descript](./images/image15.png)


## 2、接入步骤
- 整体有2种操作步骤
（1）预配置型：适合接入大量设备，需要先创建设备功能模板、设备配置模板，再创建设备并选择所创建的设备配置模板
（2）直接接入：直接创建设备，选择不绑定任何设备配置模板。
以上两种方式，在设备代码层面是一致的。

## 3、硬件连接：
- 首先，将SGP30模块与微控制器连接。SGP30模块使用基于I2C协议的通信方式，可以使用以下引脚连接：
-   模块的SDA引脚连接到微控制器的对应SDA引脚。
<!-- -->
-   模块的SCL引脚连接到微控制器的对应SCL引脚。
<!-- -->
-   模块的VIN引脚连接到微控制器的5V电源引脚。
<!-- -->
-   模块的GND引脚连接到微控制器的地线引脚。
- 如果是NodeMCU开发板，那么接线是：
- NodeMCU开发板默认的SDA和SCL引脚是D2（GPIO4）和D1（GPIO5）。
- 注意代码也要修改：

![descript](./images/image16.png)

## 4、安装Arduino IDE
- 首先，确保你已经安装了必要的库。你可以使用Arduino
IDE的库管理器来安装。你可能需要以下库：
1\. Adafruit SGP30 Library
2\. Adafruit Unified Sensor Library
3\. Pubsubclient
4\. ArduinoJson
![descript](./images/image17.png)

## 5、在ThingsPanel平台中创建设备
- 创建设备时需要选择**SGP30气体传感器插件。**
![descript](./images/image18.png)

##  6、在Arduino IDE中刷写代码
- 需要修改Wi-Fi热点名、密码、MQTT用户名。
- 先点击验证再上传代码。
- 刷写代码完成后，ThingsPanel平台即可收到数据。