/** @format */

// import React from "react";
import * as React from "react";

import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { Log } from "meteor/logging";
import Button from "@mui/material/Button";

import Connect from "../imports/ui/Connect";
import DemoGauge from "../imports/ui/yibiao";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CollapsibleTable from "../imports/ui/normal";
import "./main.css"

import App from "../imports/ui/App";
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 设置为暗黑模式
    background: {
      default: '#000000', // 设置默认背景为黑色
      paper: '#121212',  // 设置纸张背景为深灰色（可选）
    },
  },
});
// impirt {DemoGauge}
// import Data from "../imports/ui/Data";
var init_state;
var android = true;


Meteor.startup(() => {
  let bodyStyle = document.body.style;
  bodyStyle.backgroundColor = darkTheme.palette.mode == 'dark' ? '#000000' : '#ffffff';
  let main_color = darkTheme.palette.mode == 'dark' ? '#121212' : '#ffffff';

  const macAddress_or_uuid = "78:87:13:04:04:EF";
  // const macAddress_or_uuid = "00001101-0000-1000-8000-00805f9b34fb";
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  console.log(darkTheme.palette.background.default);
  // 1.启动时刻蓝牙初始化
  if (android) {
    bluetoothle.initialize(
      function (result) {
        if (result.status === "enabled") {
          console.log("蓝牙已启用");
        }
        init_state = result;
      },
      { request: true, statusReceiver: false }
    );
  }




  // console.log(init_state);
  root.render(
    <>
    <App />
      {/* <Connect ></Connect>
      <ThemeProvider theme={darkTheme}>
        <CollapsibleTable Data={Data} setData={setData} />
      </ThemeProvider> */}
      {/* <a>{Data}</a> */}
      {/* <h2>{Data}</h2> */}
      {/* <Button
        variant="outlined"
        onClick={() => {
          // bluetoothle.enable(()=>{alert("succcess")},()=>{Log("error")})
          console.log(Data);
        }}
      >
        关闭蓝牙
      </Button>  */}
      {/* <Bar1></Bar1>  */}
      {/* <br></br> */}

      {/* <Button
        variant="outlined"
        onClick={() => {
          bluetoothle.connect(
            function () {
              // alert("连接蓝牙成功");
              console.log("连接蓝牙成功");
            },
            function (info) {
              // alert("连接蓝牙失败");
              console.log("连接蓝牙失败");
              console.log(info);
            },
            {
              name: "HC-05",
              address: macAddress_or_uuid,
              status: "connected",
            }
          );
          // console.log("11111111111");
        }}
      >
        打开蓝牙
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          // bluetoothle.enable(()=>{alert("succcess")},()=>{Log("error")})
          alert("99992222299");
        }}
      >
        关闭蓝牙
      </Button> */}
    </>
  );
  // let htmlStyle = document.querySelector("#react-target > h1").style;
  // console.log(htmlStyle);
  // htmlStyle.color=darkTheme.palette.mode=='dark'?'#ffffff':'#000000';
});
