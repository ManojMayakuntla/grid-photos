import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const InitiateFMECA =()=>{
    return(
        <div>
             <Box sx={{width:'100%',borderBottom:'1.5px solid lightgray',height:40,marginTop:1}}>
                <Grid container spacing={2}>
                    <Grid>
                        <p>helllo</p>
                    </Grid>
                   
                </Grid>
             </Box>
        </div>
    )
}

export default InitiateFMECA;