import React from 'react';
// import { Hello } from './Hello.jsx';
// import { Info } from './Info.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AnchorTemporaryDrawer from "./Connect";
import DemoGauge from "./yibiao";
import CollapsibleTable from "./normal";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 设置为暗黑模式
    background: {
      default: '#000000', // 设置默认背景为黑色
      paper: '#121212',  // 设置纸张背景为深灰色（可选）
    },
  },
});

export default function App() {
  const [Data, setData] = React.useState({
    PH: 0,
    TDS: 0,
    温度: 0,
    浊度: 0,
});

  return (
    <>
      <h1>海洋水质监测系统</h1>
      <AnchorTemporaryDrawer Data={Data} setData={setData} />
      <ThemeProvider theme={darkTheme}>
        <CollapsibleTable Data={Data} setData={setData} />
      </ThemeProvider>
    </>
  );
}
