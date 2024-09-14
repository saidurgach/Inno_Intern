import React from 'react'
import CountryData from '../data/CountryData';

function OriginalData({data}) {
  return (
    <>
    <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    {data.map((item,index)=>{
            return(<>
                 <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Country Name:{item.country}</h5>
        <p class="card-text">Country Capital:{item.capital}</p>
        <p class="card-text">Country population:{item.population}</p>
        <p class="card-text">Country Official_language:{item.official_language}</p>
        <p class="card-text">Country Currency:{item.currency}</p>
      </div>
    </div>
  </div>
            </>)
         })}
   
    </div>
    </>
  )
}

export default OriginalData;