import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./foodLogo1.jpeg"

/**
 * Header
 *   Logo
 *   Navbar
 *Body
 *   Search
 *   Restaurent
 *       Cards
 *               Image
 *               Name of rest, 
 *              rating,cuisine, delivery time
 *Footer
 *   Copyright
 *   links
 */

const Header = () =>{
    return (
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className="nav-items">
        <ul>
            <li><a href="/home">Home</a></li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>
    )
}
// const resObj = 
//     {
//         "info": {
//           "id": "375041",
//           "name": "Andhra Gunpowder",
//           "cloudinaryImageId": "byilgyrcfz690ryoasww",
//           "locality": "6th Block",
//           "areaName": "Koramangala",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Andhra",
//             "Biryani",
//             "South Indian"
//           ],
//           "avgRating": 4.3,
//           "feeDetails": {
//             "restaurantId": "375041",
//             "fees": [
//               {
//                 "name": "BASE_DISTANCE",
//                 "fee": 2800
//               },
//               {
//                 "name": "BASE_TIME"
//               },
//               {
//                 "name": "ANCILLARY_SURGE_FEE"
//               }
//             ],
//             "totalFee": 2800
//           },
//           "parentId": "10496",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 20,
//             "lastMileTravel": 0.1,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20 mins",
//             "lastMileTravelString": "0.1 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2023-09-14 01:00:00",
//             "opened": true
//           },
//           "badges": {
//             "textExtendedBadges": [
//               {
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available",
//                 "fontColor": "#7E808C"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "",
//                       "fontColor": "#7E808C",
//                       "iconId": "guiltfree/GF_Logo_android_3x",
//                       "shortDescription": "options available"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "₹175 OFF",
//             "subHeader": "ABOVE ₹499",
//             "discountTag": "FLAT DEAL"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
          
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
//           "type": "WEBLINK"
//         }
//       }
const resList = [
  
  {
    "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "r4ufflqojich0r29efvc",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "65797",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "371281",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      "type": "WEBLINK"
    }
  },
  {
    "info": 
    {
      "id": "25620",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Intermediate Ring Road",
      "areaName": "Ejipura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "25620",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50467",
      "name": "Bakingo",
      "cloudinaryImageId": "wle5xrryznnyrdoxlchz",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "50467",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "3818",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41913",
      "name": "Chinita Real Mexican Food",
      "cloudinaryImageId": "hcldbmf9owc3grvbenhx",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹750 for two",
      "cuisines": [
        "Mexican",
        "Salads",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "41913",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "5064",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "140887",
      "name": "McDonald's",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "locality": "Mantri Avenue",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "140887",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "5934",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10576",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "10576",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "721",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "93741",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "The Nexus Mall",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "93741",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "2",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "27811",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "wbjc2dzgqskcxgfzk4fc",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "feeDetails": {
        "restaurantId": "27811",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "2093",
      "avgRatingString": "4.7",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:55:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-1st-block-koramangala-bangalore-27811",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108424",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
      "locality": "5TH Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "108424",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "2456",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 00:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "158855",
      "name": "Candice's Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "hpvifptiufwr5ntqc4x1",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Continental",
        "American",
        "Salads",
        "Desserts",
        "Beverages",
        "Healthy Food"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "158855",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "8238",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "352791",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
      "locality": "8th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.8,
      "veg": true,
      "feeDetails": {
        "restaurantId": "352791",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "12175",
      "avgRatingString": "4.8",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹749",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-8th-block-koramangala-bangalore-352791",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "42060",
      "name": "Sharief Bhai",
      "cloudinaryImageId": "mmavnrootu7ypscic1qm",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "Arabian",
        "Kebabs",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "42060",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "5734",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sharief-bhai-koramangala-bangalore-42060",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "2072",
      "name": "Kota Kachori And Falahaar",
      "cloudinaryImageId": "3198495edc9215c39d001593cb9d6b10",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Sweets",
        "Beverages",
        "Rajasthani",
        "Snacks",
        "Chaat",
        "Desserts"
      ],
      "avgRating": 4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "2072",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "373582",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kota-kachori-and-falahaar-7th-block-koramangala-bangalore-2072",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "293095",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "vgksvwfy7ybng94snjtx",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "293095",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "2438",
      "avgRatingString": "3.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/barbeque-nation-koramangala-bangalore-293095",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108097",
      "name": "Ambur Star Briyani Since 1890",
      "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Andhra",
        "Beverages",
        "Seafood"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "108097",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4500
      },
      "parentId": "21400",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "78511",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
      "locality": "8th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "78511",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "6249",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-8th-block-koramangala-bangalore-78511",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65075",
      "name": "Homely",
      "cloudinaryImageId": "xgwb49gf1wsle9zadntt",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Home Food",
        "North Indian",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "65075",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "4043",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "C",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/homely-6th-block-koramangala-bangalore-65075",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10820",
      "name": "California Burrito",
      "cloudinaryImageId": "b58sysfvskincfwmgoqd",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "10820",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "1252",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "272239",
      "name": "EatFit",
      "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "272239",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3000
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 3000
      },
      "parentId": "76139",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-13 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatfit-6th-block-koramangala-bangalore-272239",
      "type": "WEBLINK"
    }
  }
]

const RestCard = (props) =>{
    console.log(props)
    // const {resName,cuisine,stars,delivery} = props
    const {resData} = props
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            resData.info.cloudinaryImageId} 
            alt="food card" 
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} ⭐</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

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
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)