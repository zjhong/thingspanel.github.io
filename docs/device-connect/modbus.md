---
sidebar_position: 3
---

# ModBus接入
## 前置条件

安装Modbus协议插件

[ThingsPanel1.0.0安装Modbus协议插件教程](https://github.com/ThingsPanel/modbus-protocol-plugin)

## 接入步骤
1.	创建子设备功能模板【可选】
    * 创建设备物模型、Web和App图表
2.	创建网关设备配置模板
    * 需要选择使用Modbus_RTU或者Modbus_TCP
3.	创建电表设备配置模板
    * 引用子设备功能模板
4.	创建网关设备
    * 创建后获得网关设备端可配置的IP地址、端口、注册包
5.	创建电表子设备
    * 要配置数据解析
6.	添加电表子设备到网关
    * 建立网关和子设备的关联
7.	配置设备端
    * 创建设备物模型、Web和App图表
8.	查看数据
    * 在电表设备详情中查看设备数据

## 操作流程图


```mermaid

graph TD
    A[创建电表设备功能模板] --> B[创建网关设备配置模板]
    A --> C[创建电表设备模配置模板]
    B --> D[创建网关设备]
    C --> E[创建电表子设备]
    D --> F[添加电表子设备到网关]
    E --> F
    F --> G[配置设备端]
    G --> H[在平台查看数据]
```

## 接入结果


![ThingsPanel 获得数据](image/modbus_device-detials.png)

## 参考实例

[有人口红网关USR-DR154接智能电表接入ThingsPanel
](http://thingspanel.cn/posts/54)