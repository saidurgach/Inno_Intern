import React from 'react'
import CountryData from '../data/CountryData'

function AllData() {
  return (
    <>
    <div className='container'>
    <div class="row row-cols-1 row-cols-md-3 g-4">
         {CountryData.map((item,index)=>{
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
    </div>
    </>
  )
}

export default AllData