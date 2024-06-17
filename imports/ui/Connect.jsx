/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// import Fab from '@mui/material/Fab';
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsBluetoothIcon from "@mui/icons-material/SettingsBluetooth";
import HelpIcon from "@mui/icons-material/Help";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Bluetooth } from "@mui/icons-material";
const macAddress_or_uuid = "78:87:13:04:04:EF";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


var android = true;
export default function AnchorTemporaryDrawer({Data,setData}) {
    const [open, setOpen] = React.useState(false);
    const [BluetoothList, setBluetoothList] = React.useState([]);
    const [BluetoothListSource, setBluetoothListSource] = React.useState([]);
    const [nowindex, setnowindex] = React.useState([]);
    const iconv = require('iconv-lite');
    var use_ = [];
    // var devives_ = [];

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const list = (anchor = "bottom") => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    // Remove the empty if statement
                    android == false
                        ? BluetoothList.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        console.log(index);
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                        : BluetoothList.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        console.log(BluetoothListSource[index]);
                                        setnowindex(index);
                                        // bluetoothle.close(
                                        //     () => {
                                        //         console.log("关闭成功");
                                        //     },
                                        //     (result) => {
                                        //         console.log("关闭失败", result.message);
                                        //     },
                                        //     { address: BluetoothListSource[index].address }
                                        // );

                                        // bluetoothle.connect(
                                        bluetoothSerial.connect(
                                            BluetoothListSource[index].address,
                                            () => {
                                                console.log("连接成功");
                                                alert("连接成功");
                                            },
                                            (result) => {
                                                console.log("连接失败", result);
                                                alert("连接失败");
                                            }
                                        );
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                }
            </List>
            <Divider />
        </Box>
    );

    return (
        <>
            {/* <Button onClick={toggleDrawer(true)}>bottom</Button>
       */}
            <Box
                sx={{
                    "& > :not(style)": { m: 1 },
                    position: "fixed", // 使用固定定位
                    bottom: "3%", // 设置距离底部为0
                    right: "5%", // 设置距离底部为0
                }}
            >
                <Tooltip title="连接蓝牙">

                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={() => {
                            if (android) {
                                // android
                                bluetoothle.retrieveConnected(
                                    function (devices) {
                                        // devives_ = devices;
                                        setBluetoothListSource(devices);
                                        // setBluetoothList([]);
                                        use_ = [];
                                        devices.forEach((element) => {
                                            console.log(element.name, BluetoothList);
                                            // setBluetoothList([...BluetoothList, element.name]);
                                            use_.push(element.name);
                                        });
                                        setBluetoothList(use_);
                                        console.log("已配对的设备:", BluetoothList);
                                    },
                                    { services: [] }
                                );
                                // BluetoothListSource.map((text, index) => {
                                //     // console.log('text', text);
                                //     // console.log('index', index);
                                //     setBluetoothList([...BluetoothList, text.name]);
                                // });
                                // setBluetoothList(devives_);
                                // console.log('输出devices_', devives_);
                                // setBluetoothList(['11', '222']);
                                console.log("更新后的状态", BluetoothListSource);
                                console.log("数组", BluetoothList);

                                // console.log('111');
                            } else {
                                console.log("DEBUG");
                                setBluetoothList(["11", "222"]);
                                console.log("更新后的状态", BluetoothList);
                            }
                            // console.log('555');
                            setOpen(true);
                            // console.log(open);
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>

                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => {
                        // console.log(BluetoothListSource[nowindex].name);
                        // bluetoothSerial.readUntil('\n',function (data) {
                        //     // console.log(data);
                        //     const match = data.match(/\d+(\.\d+)?/);
                        //     if (match) {
                        //         console.log(match[0]);
                        //     }
                        // }, () => {
                        //     console.log("error");

                        // });
                        bluetoothSerial.subscribeRawData(function (data) {
                            // console.log(data['Uint8Array']);
                            // console.log(type(data));
                            var textDecoder = new TextDecoder("utf-8");
                            var data_str = textDecoder.decode(data);
                            // 正则提取出数字
                            const match = data_str.match(/\d+(\.\d+)?/);
                            const regex = /PH:\s*([0-9.]+)\r\nTDS:\s*([0-9.]+)\r\n.+?:\s*([0-9.]+)��\r\n.+?:\s*([0-9.]+)NTU\r\n\r\n/;
                            const matches = data_str.match(regex);

                            if (matches) {
                                const ph = matches[1];
                                const tds = matches[2];
                                const temperature = matches[3];
                                const turbidity = matches[4];
                                // console.log(data_str);
                                // console.log(`PH: ${ph}, TDS: ${tds}, 温度: ${temperature}, 浊度: ${turbidity}`);
                                setData({
                                    PH: ph,
                                    TDS: tds,
                                    温度: temperature,
                                    浊度: turbidity,
                                });
                                console.log(Data);

                                // console
                            } else {
                                console.log("No match found");
                            }
                            // const match = data.match(/\d+(\.\d+)?/);
                            // if (match) {
                            //     console.log(match[0]);
                            // }
                        }, () => {
                            console.log("error");
                            { }
                        });
                    }}
                >
                    <SettingsIcon />
                </Fab>
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => {
                        // console.log(BluetoothListSource[nowindex].name);
                        // bluetoothSerial.readUntil('\n',function (data) {
                        //     // console.log(data);
                        //     const match = data.match(/\d+(\.\d+)?/);
                        //     if (match) {
                        //         console.log(match[0]);
                        //     }
                        // }, () => {
                        //     console.log("error");

                        // });
                        bluetoothSerial.unsubscribeRawData(function (data) {
                            console.log("关闭订阅成功");
                            alert("关闭订阅成功");
                            // const match = data.match(/\d+(\.\d+)?/);
                            // if (match) {
                            //     console.log(match[0]);
                            // }
                        }, () => {
                            console.log("关闭订阅失败");
                            alert("关闭订阅失败");

                        });
                    }}
                >
                    <SettingsIcon />
                </Fab>


                {/* <Fab color="primary" aria-label="add">
        <HelpIcon />
      </Fab> */}
            </Box>

            <Drawer anchor={"bottom"} open={open} onClose={toggleDrawer(false)}>
                {list("bottom")}
            </Drawer>
        </>
    );
}

//   {['left', 'right', 'top', 'bottom'].map((anchor) => (
//     <React.Fragment key={anchor}>
//       <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//       <Drawer
//         anchor={anchor}
//         open={state[anchor]}
//         onClose={toggleDrawer(anchor, false)}
//       >
//         {list(anchor)}
//       </Drawer>
//     </React.Fragment>
//   ))}
// <Button
//     variant="outlined"
//     onClick={() => {
//         bluetoothle.retrieveConnected(function(devices) {
//             console.log('已配对的设备:', devices);
//           }, { services: [] });
//         // console.log("11111111111");
//     }}
// >
//     连接6
// </Button>
