import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@mui/material/Button";
import SelectSmall from './select';
// import {  } from "module";
function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [Mode, setMode] = React.useState('');
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6" component="div" sx={{ marginRight: 1 }}>
                                    历史数据
                                </Typography>
                                <SelectSmall Mode={Mode} setMode={setMode} />
                            </Box>

                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>时间戳</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};



export default function CollapsibleTable({ Data, setData }) {
    // 定义一个每一秒运行一次的函数
    var rows = [
        createData('PH', Data['PH'], "良好"),
        createData('TDS', Data['TDS'], "良好"),
        createData('温度', Data['温度']+"℃", "良好"),

        createData('浊度', Data['浊度']+" NTU", "良好")
    ];
    // const [rows, setRows] = React.useState([
    //     createData('PH', 0, "良好"),
    //     createData('TDS', 0, "良好"),
    //     createData('温度', 262, "良好"),
    //     createData('浊度', 305, "良好")
    // ]);

    // React.useEffect((Data, setData) => {
    //     const interval = setInterval(() => {
    //         const newRows = rows.map((row, index) => {
    //             const newRandomValue = Math.floor(Math.random() * 100);
    //             // return index < 4 ? createData(row.name, newRandomValue, row.status) : row; // 仅更新前三行
    //             setData({
    //                 PH: Math.floor(Math.random() * 14),
    //                 TDS: Math.floor(Math.random() * 100),
    //                 温度: Math.floor(Math.random() * 35),
    //                 浊度: Math.floor(Math.random() * 100),
    //             })
    //             // index==0?createData(row.name, Data['PH'], row.status) : ((index));
    //             // switch case
    //             switch (index) {
    //                 case 0: createData(row.name, Data['PH'], row.status);
    //                     break;
    //                 case 1: createData(row.name, Data['TDS'], row.status);
    //                     break;
    //                 case 2: createData(row.name, Data['温度'], row.status);
    //                     break;
    //                 case 3: createData(row.name, Data['浊度'], row.status);
    //                     break;

    //             }
    //             // return index < 4 ? createData(row.name, Data[row.name], row.status) : row; // 仅更新前三行
    //         });
    //         setRows(newRows);
    //     }, 100);

    //     return () => clearInterval(interval); // 清除定时器
    // }, []); // 空依赖数组，确保只运行一次

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>项目</TableCell>
                        <TableCell align="center">值</TableCell>
                        <TableCell align="center">状态</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
