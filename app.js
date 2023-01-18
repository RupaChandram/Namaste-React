import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/hunger-box.png"
//Config-driven UI
const restaurantList=[
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "464509",
                  "name": "Leon's - Burgers & Wings (Leon Grill)",
                  "uuid": "ad3d5699-2dab-4a1f-ba45-391ddd892b77",
                  "city": "1",
                  "area": "Frazer Town",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "qol6dzbjxyse0tylbznu",
                  "cuisines": [
                    "American",
                    "Snacks",
                    "Turkish",
                    "Portuguese",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 4.199999809265137,
                  "slugs": {
                    "restaurant": "leon-grill-frazer-town-frazer-town-2",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Smart Avenue, G-01, No. 90, Coles Road, Bangalore, BBMP East, Karnataka 560005",
                  "locality": "Pulkeshi Nagar",
                  "parentId": 371281,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5726496~p=7~eid=00000185-b171-555b-3b8b-7f0b0019073b",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "464509",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 4.199999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "3241",
                  "name": "Meghana Foods",
                  "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
                  "city": "1",
                  "area": "Ashok Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
                  "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian",
                    "Chinese",
                    "Seafood"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 2.4000000953674316,
                  "slugs": {
                    "restaurant": "meghana-foods-central-bangalore",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
                  "locality": "Residency Road",
                  "parentId": 635,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "3241",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 2.4000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.6",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "121603",
                  "name": "Kannur Food Point",
                  "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
                  "city": "1",
                  "area": "Tavarekere",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
                  "cuisines": [
                    "Kerala",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 30,
                  "slaString": "30 MINS",
                  "lastMileTravel": 6.5,
                  "slugs": {
                    "restaurant": "kannur-food-point-btm",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
                  "locality": "SG Palya",
                  "parentId": 20974,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "55% off",
                    "shortDescriptionList": [
                      {
                        "meta": "55% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "55% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "55% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Free Delivery",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "55% off on all orders",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "121603",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "lastMileTravel": 6.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.9",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "30531",
                  "name": "Hotel Empire",
                  "uuid": "587c2181-5bdb-454f-ae6b-6a1b2efffb90",
                  "city": "1",
                  "area": "Ashok Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
                  "cuisines": [
                    "North Indian",
                    "Kebabs",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 45000,
                  "costForTwoString": "₹450 FOR TWO",
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 30,
                  "slaString": "30 MINS",
                  "lastMileTravel": 2.0999999046325684,
                  "slugs": {
                    "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
                  "locality": "Brigade Road",
                  "parentId": 475,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "30531",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "lastMileTravel": 2.0999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "534654",
                  "name": "The Licious Kitchen",
                  "uuid": "70d00f1f-9ac7-4d89-aae8-02c5b0799f7d",
                  "city": "1",
                  "area": "Koramangala",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "yhzzdcl90e1oxqzxhfpf",
                  "cuisines": [
                    "Kebabs",
                    "Snacks",
                    "Tandoor",
                    "North Indian",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 35000,
                  "costForTwoString": "₹350 FOR TWO",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "slaString": "36 MINS",
                  "lastMileTravel": 6.400000095367432,
                  "slugs": {
                    "restaurant": "the-licious-kitchen-koramangala-koramangala",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "The Licious Store99, Gr Flr- ARD Complex5th Cross rd, 6th BlockKoramangala560095",
                  "locality": "6th Block",
                  "parentId": 321223,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5698292~p=10~eid=00000185-b171-555b-3b8b-7f0c00190a6d",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "534654",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 6.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.1",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "418389",
                  "name": "Auntie Fung's",
                  "uuid": "49b76eeb-4daa-420a-9323-120673a39310",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "rwwc0xufjuiityzgpfme",
                  "cuisines": [
                    "Chinese",
                    "Thai",
                    "Asian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 60000,
                  "costForTwoString": "₹600 FOR TWO",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "slaString": "33 MINS",
                  "lastMileTravel": 6.400000095367432,
                  "slugs": {
                    "restaurant": "auntie-fung’s-indiranagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "NO.4009, 1ST FLOOR, 100FT ROAD, HAL 2ND STAGE, INDIRANAGAR BANGALORE, INDIA, Sarvagna Nagar , B.B.M.P East, Karnataka-560008",
                  "locality": "HAL 2nd Stage",
                  "parentId": 1290,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5661580~p=13~eid=00000185-b171-555b-3b8b-7f0d00190d62",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "418389",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "lastMileTravel": 6.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.1",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "428",
                  "name": "Biryani Pot",
                  "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
                  "city": "1",
                  "area": "Btm Layout",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
                  "cuisines": [
                    "North Indian",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "slaString": "31 MINS",
                  "lastMileTravel": 7.5,
                  "slugs": {
                    "restaurant": "biryani-pot-madiwala-junction-btm",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
                  "locality": "Maruti Nagar",
                  "parentId": 21798,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "7.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "428",
                    "deliveryTime": 31,
                    "minDeliveryTime": 31,
                    "maxDeliveryTime": 31,
                    "lastMileTravel": 7.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "196047",
                  "name": "New Taj Darbar",
                  "uuid": "94a6fc19-e819-4450-b52f-a96c5a32d565",
                  "city": "1",
                  "area": "Shivajinagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
                  "cuisines": [
                    "Biryani",
                    "Indian",
                    "Chinese",
                    "Tandoor",
                    "Seafood"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 34,
                  "minDeliveryTime": 34,
                  "maxDeliveryTime": 34,
                  "slaString": "34 MINS",
                  "lastMileTravel": 2.5999999046325684,
                  "slugs": {
                    "restaurant": "new-taj-darbar-central-bangalore-central-bangalore",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "New Taj Darbar, Shivaji Nagar, Bengaluru, Karnataka, India",
                  "locality": "Saint Mary's Church Road",
                  "parentId": 148190,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "196047",
                    "deliveryTime": 34,
                    "minDeliveryTime": 34,
                    "maxDeliveryTime": 34,
                    "lastMileTravel": 2.5999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.6",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
    }, {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mnjmlphk3sefop8tzo5i",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "196677",
      name: "Firangi Bake",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ivsvlekfebsbqmtmni3h",
      cuisines: ["North Indian", "Snacks", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "296677",
      name: "Drunken Monkey",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "2d0c902eb2975b651d78e566bd8d06be",
      cuisines: ["Juices", "Snacks", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },{
    type: "restaurant",
    data: {
      type: "F",
      id: "416677",
      name: "Sri Sampoorna Veg Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "yv55fex41rwx0mtlt16q",
      cuisines: ["South Indian","North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.9",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  }]
              
const CLOUD_IMAGE_CDN = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const Title = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>
)
const styleObj = {
    color: "#3d4152"
}

const HeaderComponent = () => {
    return(
    <div className="header">
            <Title />   
         {}   
            <div className="nav-items" key="user">
            <ul style={styleObj}>
                    <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
               </ul>
            </div>      
        </div>
    )
}
const RestaurantCard = ({name, cuisines,lastMileTravelString,avgRating,cloudinaryImageId}) => {
    return (
        <div className="card">
            <img src={CLOUD_IMAGE_CDN+cloudinaryImageId} alt="" />
            <h3 className="name">{name}</h3>
            <h5 className="description">{cuisines.join(', ')}</h5>
            <h5 className="description">{lastMileTravelString}</h5>
            <h5 className="description">Ratings:<b>{avgRating}</b></h5>
        </div>
    )
}

const RestaurantList = () => {
     return (
    <div className="restaurant-list">
        {
            restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
        }
    </div>
    )
}

const BodyComponent = () => { 
    return (
       <RestaurantList />
   )
}

const FooterComponent = () => { 
   return (
     <div className="footer">
       <h4>Developed By Rupa</h4>
       <h3 className="footerText">HungerBox</h3>     
     </div>
   );
}
/**
     * Header
     *  - Logo
     *  - Nav Items
     *  - cart
     * Body
     *  -search bar
     *  -RestaurantList
     *      -RestaurantCard
     *      -Name 
     *      -Rating
     *      -Cousines
     * Footer
     *  - links
     *  - copyright
     */
      
const Layout = () => (
    <React.Fragment>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
    </React.Fragment>
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<Layout />);