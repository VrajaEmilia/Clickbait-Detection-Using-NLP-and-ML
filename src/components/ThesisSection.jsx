import React from 'react'
import "../style/ThesisSection.css"
import ModelCard from './ModelCard'
function ThesisSection() {
  return (
    <div className="thesis-section" id='thesis'>
        <h3 className='label'>Model Statistics</h3>
        <div className="card-container">
        <ModelCard title={"Gradient Boost"} stats={[97.48, 96.99, 97.89, 97.44]}/>
        <ModelCard title={"Multinomial Naive Bayes"} stats={[97.14, 95.64, 97.12, 97.12]}/>
        <ModelCard title={"Random Forest"} stats={[88.26, 91.91, 83.38, 87.43]}/>
        </div>
        <h3 className='label' id="github">Read the paper and see the code: <a href="https://github.com/VrajaEmilia">Github Account</a></h3>
    </div>
  )
}

export default ThesisSection