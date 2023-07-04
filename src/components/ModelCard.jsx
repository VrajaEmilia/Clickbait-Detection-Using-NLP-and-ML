import React from 'react'
import "../style/ModelCard.css"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
function ModelCard({title,stats}) {
  return (
    <div className='card'>
        <h3>{title}</h3>
        <div className='stats'>
            <Box sx={{ width: '80%'}}>
                <label>Accuracy: {stats[0]}%</label>
                <LinearProgress sx={{height:"10px", marginTop:"2px"}} variant="determinate" value={stats[0]}/>
            </Box>
            <Box sx={{ width: '80%'}}>
                <label>Precision: {stats[1]}%</label>
                <LinearProgress sx={{height:"10px", marginTop:"2px"}} variant="determinate" value={stats[1]}/>
            </Box>
            <Box sx={{ width: '80%'}}>
                <label>Recall: {stats[2]}%</label>
                <LinearProgress sx={{height:"10px", marginTop:"2px"}} variant="determinate" value={stats[2]}/>
            </Box>
            <Box sx={{ width: '80%'}}>
                <label>F1 Score: {stats[3]}%</label>
                <LinearProgress sx={{height:"10px", marginTop:"2px"}} variant="determinate" value={stats[3]}/>
            </Box>
        </div>
    </div>
  )
}

export default ModelCard