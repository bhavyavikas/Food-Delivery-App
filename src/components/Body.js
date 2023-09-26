import RestCard from "./RestCard";  
import resList from "../utils/mockData";
import {useState} from "react";

// let listOfRest = [
//         {
//         "info": {
//             "id": "65792",
//             "name": "HEHEA & Wings (Leon Grill)",
//             "cloudinaryImageId": "r4ufflqojich0r29efvc",
//             "locality": "Koramangala",
//             "areaName": "Koramangala",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//               "American",
//               "Snacks",
//               "Turkish",
//               "Portuguese",
//               "Continental"
//             ],
//             "avgRating": 4.3,
//             "feeDetails": {
//               "restaurantId": "65797",
//               "fees": [
//                 {
//                   "name": "BASE_DISTANCE",
//                   "fee": 3000
//                 },
//                 {
//                   "name": "ANCILLARY_SURGE_FEE"
//                 },
//                 {
//                   "name": "BASE_TIME"
//                 }
//               ],
//               "totalFee": 3000
//             },
//             "parentId": "371281",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//               "deliveryTime": 25,
//               "lastMileTravel": 1.3,
//               "serviceability": "SERVICEABLE",
//               "slaString": "25 mins",
//               "lastMileTravelString": "1.3 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2023-09-14 04:00:00",
//               "opened": true
//             },
//             "badges": {
              
//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {
              
//             },
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "imageBased": {
                  
//                 },
//                 "textBased": {
                  
//                 },
//                 "textExtendedBadges": {
                  
//                 }
//               }
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {
                  
//                 },
//                 "video": {
                  
//                 }
//               }
//             },
//             "reviewsSummary": {
              
//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {
              
//             }
//           }
//         },
//         {
//             "info": {
//             "id": "65797",
//             "name": "Leon's - Burgers & Wings (Leon Grill)",
//             "cloudinaryImageId": "r4ufflqojich0r29efvc",
//             "locality": "Koramangala",
//             "areaName": "Koramangala",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//               "American",
//               "Snacks",
//               "Turkish",
//               "Portuguese",
//               "Continental"
//             ],
//             "avgRating": 4.7,
//             "feeDetails": {
//               "restaurantId": "65797",
//               "fees": [
//                 {
//                   "name": "BASE_DISTANCE",
//                   "fee": 3000
//                 },
//                 {
//                   "name": "ANCILLARY_SURGE_FEE"
//                 },
//                 {
//                   "name": "BASE_TIME"
//                 }
//               ],
//               "totalFee": 3000
//             },
//             "parentId": "371281",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//               "deliveryTime": 25,
//               "lastMileTravel": 1.3,
//               "serviceability": "SERVICEABLE",
//               "slaString": "25 mins",
//               "lastMileTravelString": "1.3 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2023-09-14 04:00:00",
//               "opened": true
//             },
//             "badges": {
              
//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {
              
//             },
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "imageBased": {
                  
//                 },
//                 "textBased": {
                  
//                 },
//                 "textExtendedBadges": {
                  
//                 }
//               }
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {
                  
//                 },
//                 "video": {
                  
//                 }
//               }
//             },
//             "reviewsSummary": {
              
//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {
              
//             }
//           }
//         },
//         {   
//           "info": {
//             "id": "65717",
//             "name": "C Burgers & Wings (Leon Grill)",
//             "cloudinaryImageId": "r4ufflqojich0r29efvc",
//             "locality": "Koramangala",
//             "areaName": "Koramangala",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//               "American",
//               "Snacks",
//               "Turkish",
//               "Portuguese",
//               "Continental"
//             ],
//             "avgRating": 2.9,
//             "feeDetails": {
//               "restaurantId": "65797",
//               "fees": [
//                 {
//                   "name": "BASE_DISTANCE",
//                   "fee": 3000
//                 },
//                 {
//                   "name": "ANCILLARY_SURGE_FEE"
//                 },
//                 {
//                   "name": "BASE_TIME"
//                 }
//               ],
//               "totalFee": 3000
//             },
//             "parentId": "371281",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//               "deliveryTime": 25,
//               "lastMileTravel": 1.3,
//               "serviceability": "SERVICEABLE",
//               "slaString": "25 mins",
//               "lastMileTravelString": "1.3 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2023-09-14 04:00:00",
//               "opened": true
//             },
//             "badges": {
              
//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {
              
//             },
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "imageBased": {
                  
//                 },
//                 "textBased": {
                  
//                 },
//                 "textExtendedBadges": {
                  
//                 }
//               }
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {
                  
//                 },
//                 "video": {
                  
//                 }
//               }
//             },
//             "reviewsSummary": {
              
//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {
              
//             }
//           }
//         }
// ]
const Body =() =>
{
const [listOfRestJs, setListOfTestState] = useState(resList)

    return (
        <div className="body">
        <div className="search-bar">
            <input className="input-text" type="text" />
            <button className="search-btn">Search</button>
        </div>
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                setListOfTestState( listOfRestJs.filter(
                    (res)=> res.info.avgRating >= 4.3
            ))
            console.log(listOfRestJs)
            }}
            >Top Rated Restuarants</button>
            <button className="filter-btn"
            onClick={()=>{
              setListOfTestState(listOfRestJs.filter(
                (res)=> res.info.sla.deliveryTime < 30 
                ))
            }}
            >Nearest</button>
        </div>
            <div className="res-container">
            {
                listOfRestJs.map((res) => <RestCard 
              key = {res.info.id}
              resData={res}/>)
            }
            </div>
        </div>
    )
}

export default Body;