// import bluetoothSerial from 'bluetooth-serial-port';
// import bluetoothSerial from 'cordova-plugin-bluetooth-serial'
import { cordova } from "meteor/meteor"
import { Meteor } from 'meteor/meteor';

// 使用bluetooth devices info 查看蓝牙设备的mac地址
macAddress_or_uuid = "78:87:13:04:04:EF"
Meteor.startup(function () {
    // Here we can be sure the plugin has been initialized
    // navigator.geolocation.getCurrentPosition(success);
     function connect_() {
        bluetoothSerial.connect(macAddress_or_uuid,
            () => alert("连接蓝牙成功")
            , () => alert("蓝牙未打开，找不到蓝牙设备"));
        // bluetoothSerial.getCurrentPosition(success)
        if (Meteor.isCordova) {
            // 设备支持 cordova-plugin-bluetooth-serial 插件
            alert("连接蓝牙成功222");
        } else {
            alert("连接蓝牙成功111");

            // 设备不支持 cordova-plugin-bluetooth-serial 插件
        }

    }
});
