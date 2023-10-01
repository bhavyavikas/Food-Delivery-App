import RestCard from "./RestCard";  
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body =() =>
{
const [listOfRestJs, setListOfRest] = useState([]);
const [filteredList, setFiltered] = useState([]);
const [searchText, setSearchText]= useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    // optional chaining
    setListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFiltered(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
// conditional rendering


    return listOfRestJs.length === 0 ? <Shimmer/>:(
        <div className="body">
        <div className="search-bar">
            <input className="input-text" type="text" 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
            />
            <button className="search-btn" 
            onClick={()=>{
                console.log(searchText)
                const filteredList = listOfRestJs.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFiltered(filteredList)
                console.log()
            }}
            >Search</button>
        </div>
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                setListOfRest( listOfRestJs.filter(
                    (res)=> res.info.avgRating >= 4.3
            ))
            console.log(listOfRestJs)
            }}
            >Top Rated Restuarants</button>
            <button className="filter-btn"
            onClick={()=>{
                setListOfRest(listOfRestJs.filter(
                (res)=> res.info.sla.deliveryTime < 30 
                ))
            }}
            >Nearest</button>
        </div>
            <div className="res-container">
            {
                filteredList.map((res) => <RestCard 
              key = {res.info.id}
              resData={res}/>)
            }
            </div>
        </div>
    )
}

export default Body;