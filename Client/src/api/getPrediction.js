import axios from 'axios'

export const makePrediction = async (headline,chosenModel) =>
{
    try{
        const res = await axios.post(`http://127.0.0.1:5000`,{headline:headline, model:chosenModel})
        return res.data.prediction
    }
    catch (e){
        console.log(e)
    }
   // axios.post("http://127.0.0.1:5000", headline)
    //.then(response => console.log(response));

}