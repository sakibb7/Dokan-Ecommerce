import {RiWomenLine,
    AiOutlineMan,
    TbMoodKid,
    MdSportsBasketball,
    AiOutlineCrown,
    GiGoldBar} from "../assets"




export const mainMenu =[
    {
        id:101,
        name:"Men",
        link:"/"
    },
    {
        id:102,
        name:"Women",
        link:"/"
    },
    {
        id:103,
        name:"Beauty",
        link:"/"
    },
    {
        id:104,
        name:"Sport",
        link:"/"
    },
    {
        id:105,
        name:"Templates",
        link:"/",
        subMenu:true,
        subLinks:[
            {
                title:"Home Pages",
                sublink:[
                    {
                        id:101,
                        name:"Home Page 1",
                        link:"/"
                    },
                    {
                        id:102,
                        name:"Home Page 2",
                        link:"/"
                    },
                    {
                        id:103,
                        name:"Header 1",
                        link:"/"
                    },
                    {
                        id:104,
                        name:"Header 2",
                        link:"/"
                    },
                    {
                        id:105,
                        name:"Coming Soon",
                        link:"/"
                    },
                    
                ]
            },

            {
                title:"Other Pages",
                sublink:[
                    {
                        id:101,
                        name:"Home Page 1",
                        link:"/"
                    },
                    {
                        id:102,
                        name:"Home Page 2",
                        link:"/"
                    },
                    {
                        id:103,
                        name:"Header 1",
                        link:"/"
                    },
                    {
                        id:104,
                        name:"Header 2",
                        link:"/"
                    },
                    {
                        id:105,
                        name:"Coming Soon",
                        link:"/"
                    },
                    
                ]
            },
            {
                title:"Shop Pages",
                sublink:[
                    {
                        id:101,
                        name:"Cart",
                        link:"/cart"
                    },
                    {
                        id:102,
                        name:"Checkout",
                        link:"/checkout"
                    },
                    {
                        id:103,
                        name:"All Products",
                        link:"/all-products"
                    },
                    {
                        id:104,
                        name:"Header 2",
                        link:"/"
                    },
                    {
                        id:105,
                        name:"Coming Soon",
                        link:"/"
                    },
                    
                ]
            },
            {
                title:"Blog Pages",
                sublink:[
                    {
                        id:101,
                        name:"Home Page 1",
                        link:"/"
                    },
                    {
                        id:102,
                        name:"Home Page 2",
                        link:"/"
                    },
                    {
                        id:103,
                        name:"Header 1",
                        link:"/"
                    },
                    {
                        id:104,
                        name:"Header 2",
                        link:"/"
                    },
                    {
                        id:105,
                        name:"Coming Soon",
                        link:"/"
                    },
                    
                ]
            }
        ]
    },
    {
        id:106,
        name:"Explore",
        link:"/",
    }
]

export const sectionMenu = [
    {
        id:101,
        name:"Men",
        icon:{AiOutlineMan},
    },
    {
        id:102,
        name:"Women",
        icon:{RiWomenLine},
    },
    {
        id:103,
        name:"Kids",
        icon:{TbMoodKid},
    },
    {
        id:104,
        name:"Sports",
        icon:{MdSportsBasketball},
    },
    {
        id:105,
        name:"Beauty",
        icon:{AiOutlineCrown},
    },
    {
        id:106,
        name:"Jewelry",
        icon:{GiGoldBar},
    },
]