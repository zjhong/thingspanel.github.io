---
sidebar_position: 1
---

# MQTT直连设备接入

## 1、 说明
- message_id为消息标识符，近期不重复即可，可取毫秒时间戳的后七位
- device_number为设备编号，设备唯一
- 核心交互数据分为四类：遥测、属性、事件、命令；


## 2、MQTT主题
### 2.1、设备上报

| 主题 | 说明 |
| --- | --- |
| devices/telemetry | 上报遥测 |
| devices/attributes/{message_id}  | 上报属性 |
| devices/event/{message_id} | 上报事件 |
| ota/devices/progress | 上报OTA升级进度（固件升级相关） |
| devices/command/response/{message_id} | 上报接收命令的响应 |
| devices/attributes/set/response/{message_id} | 上报接收属性设置的响应 |

- 遥测上报报文
	示例：```{"temperature":28.5,"version":"v0.1","switch":true}```
- 属性上报报文
	示例：```{"ip":"127.0.0.1","mac":"xxxxxxxxxx","port":1883}```
- 事件上报报文
	示例：```{"method":"FindAnimal","params":{"count":2,"animalType":"cat"}}```
- 上报升级进度（固件升级相关）
	示例1：```{"step":"100","desc":"升级进度100%","module":"MCU"}```
	示例2：```{"step":"-1","desc":"OTA升级失败，请求不到升级包信息。","module":"MCU"}```
	1~100的整数：升级进度百分比。1：升级失败。-2：下载失败。-3：校验失败。-4：烧写失败。




