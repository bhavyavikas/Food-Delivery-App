import RestCard from "./RestCard";  
import resList from "../utils/mockData";


const Body =() =>
{
    return (
        <div className="body">
        <div className="search-bar">
        <input type="text" />
        <input type="button" value="Search" />
        </div>
            <div className="res-container">
            {
              resList.map((res) => <RestCard 
              key = {res.info.id}
              resData={res}/>)
            }
            </div>
        </div>
    )
}

export default Body;