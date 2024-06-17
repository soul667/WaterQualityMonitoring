import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SetMealOutlined } from '@mui/icons-material';

export default function SelectSmall({Mode,setMode}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">选择模式</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Mode}
        label="选择模式"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>历史数据</MenuItem>
        <MenuItem value={2}>折线图</MenuItem>
        <MenuItem value={3}>仪表盘</MenuItem>
        <MenuItem value={4}>异常分析</MenuItem>
        <MenuItem value={5}>导出数据</MenuItem>
      </Select>
    </FormControl>
  );
}
