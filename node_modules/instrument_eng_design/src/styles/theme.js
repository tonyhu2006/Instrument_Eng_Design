 // theme.js
 // import { createMuiTheme } from '@mui/styles';
 import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
   palette: {
     primary: {
       main: '#1976d2',
     },
     secondary: {
       main: '#dc004e',
     },
     // 其他颜色配置...
   },
   typography: {
     // 字体配置...
   },
   // 其他主题配置...
 });

 export default theme;