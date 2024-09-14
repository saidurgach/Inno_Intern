import { useState } from "react";

import CountryData from "../data/CountryData"
import AllData from "./AllData";
import OriginalData from "./OriginalData";
import './CountrySearch.css'


const SearchBar=()=>{

    const[inputData,setInputData] = useState("")
    const[filterData,setFilterData] = useState([])
    
    const[originalCountryData,setOriginalCountryData]=useState([])
   

 const handleChange=()=>{
    // console.log(inputData)
    let SearchData=CountryData.filter((item)=>{
        if(`${item.country}${item.capital}`.toUpperCase().includes(inputData.toUpperCase())==true){
                   return true;
        }else{
          return false
        }
})
setFilterData(SearchData)  
 }

 const handleClick=(value)=>{
         let OriginalCountriesData=CountryData.filter((item)=>{
            if(`${item.country}`.toUpperCase().includes(value.toUpperCase())==true){
                       return true;
            }else{
              return false
            }
    })
        console.log(OriginalCountriesData)
        
        setOriginalCountryData(OriginalCountriesData)
        setFilterData([])
                setInputData('')
 }

    return(<>
        <div className="container">
           
            <div className="row" style={{display: 'flex', justifyContent: 'center', width: '50%', margin: '50px auto' }}>
            <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input  style={{width:"70%"}}
  onChange={(e)=>{handleChange() 
                   setInputData(e.target.value)}}
  type="text" class="form-control" placeholder="Search For Country" aria-label="Search For Country" aria-describedby="basic-addon1"/>
</div>
                 </div>

                 <div className="row justify-content-center mt-3">
        <div className="col-md-6 ListGroup">
          <ul className="list-group">
            { filterData.length>0 ? filterData.map((item, index) => (
              <li  style={{color:"blue" , cursor:"pointer"}}  key={index} className="list-group-item" onClick={()=>{handleClick(item.country)}}>
                <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
</svg> {item.country}
              </li>
            )) : " "}
          </ul>
        </div>
      </div>


   <div className="row">
          {originalCountryData.length>0  ?  <OriginalData data={originalCountryData}/> : <AllData/>} 
          {/* {singleCData.length>0  ?  <SingleCountry data={singleCData}/> : <InitialData/>} */}
          
       
   </div>
        </div>
      

    </>)
}

export default SearchBar