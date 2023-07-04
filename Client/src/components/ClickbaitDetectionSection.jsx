import React from 'react'
import { useState,useEffect } from 'react'
import '../style/ClickbaitDetectionSection.css'
import { makePrediction } from '../api/getPrediction'
import { CircularProgress } from '@mui/material'
import ModelSelection from './ModelSelection'
function ClickbaitDetectionSection() {
  const [prediction, setPrediction] = useState("")
  const [headline,setHeadline] = useState("")
  const [chosenModel, setChosenModel] = useState("GradientBoost")
  const [searchButtonClicked, setSearchButtonClicked] = useState(false)
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }
  const getPrediction = async () =>{
    setPrediction(undefined)
    if (!searchButtonClicked)
      setSearchButtonClicked(true)
    await timeout(1000);
    setPrediction(await makePrediction(headline, chosenModel))
  }
  return (
    <div className='prediction-container' id='prediction'>
        <div className='section1'>
            <ModelSelection setChosenModel={setChosenModel}/>
            <h3 className='prediction-h3'>Enter a headline to make a prediction:</h3>
            <div className='searchbar'>
                <input className='bar' type='text' onChange={(e)=>setHeadline(e.target.value)}/>
                <button className='button' onClick={getPrediction}/>
            </div>
        </div>
        {searchButtonClicked &&
        <div>
        {prediction?
          <h5 className='prediction-h5'>Headline likely is: <span>{prediction}</span></h5>
          :
          <div className='circular-progress'><CircularProgress/></div>
        }
        </div>
        }
    </div>
  )
}

export default ClickbaitDetectionSection