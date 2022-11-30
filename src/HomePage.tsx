import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InitiateFMECA from './InitiateFMECA'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
     <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:'#42a5f5',height:70}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{marginLeft:'2%'}}>
          <Tab label="FMECA Desktop" {...a11yProps(0)} sx={{border:'1px solid white',color:'white',marginLeft:2,marginTop:1}} />
          <Tab label="My Open FMECA's" {...a11yProps(1)} sx={{border:'1px solid white',color:'white',marginLeft:2,marginTop:1}}/>
          <Tab label="Initiate FMECA" {...a11yProps(2)} sx={{border:'1px solid white',color:'white',marginLeft:2,marginTop:1}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
         <InitiateFMECA/>
      </TabPanel>
    </Box>
    </>
  );
}