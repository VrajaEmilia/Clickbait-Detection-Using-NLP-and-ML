import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function ModelSelection({setChosenModel}) {
  return (
    <FormControl>
        <FormLabel className="form-label" id="demo-radio-buttons-group-label">Ai Model</FormLabel>
        <RadioGroup 
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="GradientBoost"
            name="radio-buttons-group"
            onChange={(e)=> setChosenModel(e.target.value)}
        >
        <FormControlLabel value="GradientBoost" control={<Radio />} label="Gradient Boost" />
        <FormControlLabel value="MultinomialNb" control={<Radio />} label="Multinomial Naive Bayes" />
        <FormControlLabel value="RandomForest" control={<Radio />} label="Random Forest" />
        </RadioGroup>   
    </FormControl>
  )
}

export default ModelSelection