import Category from "./templates/Category"

function Commercial() {
  return (
    <Category 
    category={
      {
      categoryName: 'commercial',
      headingText: "Commercial Locations",
      categoryImage: "commercialbackgrounf.png",
      introText: "Welcome to the heart of adventure, where every moment is a new opportunity for excitement! Whether you're seeking a serene escape or a pulse-quickening thrill, our handpicked selection of leisure activities, accommodations, and shopping destinations promises to make your stay unforgettable.",
      categories: [
        {
            categoryName: ["Leisure", "Leisure"],
            locations: [
                {
                    locationName: "Millenium Park",
                    address: "5 Usuma St, Three Arms Zone, Abuja 900103, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'millenium.png'

                },
                {
                    locationName: "Jabi Boat Club",
                    address: "3C97+VVV, Alex Ekwueme Way, Jabi, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'jabi.png'

                },
                {
                    locationName: "IBB Golf & Country Club",
                    address: "41 Udi Hill Street, off Aso Dr, Abuja 900211",
                    rating: 4.7,
                    pic: 'ibb.png'

                },
                {
                    locationName: "Paint & Sip by FR",
                    address: "2044 Aguiyi Ironsi St, Maitama, Abuja 900271, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'paint.png'

                },
                {
                    locationName: "Go Karting",
                    address: "52 Mississippi St, Maitama, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'go.png'

                },
                {
                    locationName: "Art Tech District",
                    address: "Floor, 01, Transcorp Hilton Hotel, No.1, Aguiyi Ironsi Street, Maitama, Abuja, FCT",
                    rating: 4.7,
                    pic: 'art.png'

                }
            ]
        },
        {
            categoryName: ["Shopping Mall", "Shopping Mall"],
            locations: [
                {
                    locationName: "Jabi lake Mall",
                    address: "Jabi District, Abuja",
                    rating: 4.7,
                    pic: 'lakeMalll.png'

                },
                {
                    locationName: "Novare Mall",
                    address: "Wuse, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'novare.png'

                },
                {
                    locationName: "21 Park Mall",
                    address: "163 Adetokunbo Ademola Crescent, Wuse, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: '21.png'

                },
                {
                    locationName: "Silverbird Centre",
                    address: "1161, Memorial Drive, By Musa Yar'adua Center, Ctral Business District, Abuja",
                    rating: 4.7,
                    pic: 'silverbird.png'

                },
                {
                    locationName: "Kokkies Mall",
                    address: "zone, B03, Plot 724 Goke Adegoroye Cl, Cadastral, Abuja 902101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'kokkies.png'

                },
                {
                    locationName: "Ceddi Plaza",
                    address: "264 Tafawa Balewa Rd, Phase 1, Abuja 901002, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'ceddi.png'

                }
            ]
        },
        {
            categoryName: ["Hotels", "Hotels"],
            locations: [
                {
                    locationName: "Transcorp Hilton",
                    address: "1 Aguiyi Ironsi St, Maitama, Abuja 900001, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'transc.png'

                },
                {
                    locationName: "Fraser Suites",
                    address: "294 Leventis Close, Central Business District, Abuja 900103, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'fraser.png'

                },
                {
                    locationName: "Nordic Hotel",
                    address: "Blvd, Plot 1332 Shehu Yar'adua Wy, Mabushi, Abuja",
                    rating: 4.7,
                    pic: 'nordic.png'

                },
                {
                    locationName: "Abuja Continental Hotel",
                    address: "1 ladi Kwali St, Wuse Zone 4, Abuja 900281, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'continental.png'

                },
                {
                    locationName: "The Wells Carlton",
                    address: "8 Gado Nasko St, Asokoro, Abuja 900110, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'thewells.png'

                },
                {
                    locationName: "Johnwood Hotel by Bolton",
                    address: "6 Sokode Cres, Wuse, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'johnwood.png'
                }
            ]
        },
        {
            categoryName: ["For The Kids", "For The Kids"],
            locations: [
                {
                    locationName: "Aqualandia Waterpark",
                    address: "174 Kur Mohammed Ave, Wuse, Abuja 900103, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'aqualandia.png'

                },
                {
                    locationName: "Children's Park and Zoo",
                    address: "Wuse, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'children.png'

                },
                {
                    locationName: "Playworld",
                    address: " 458 Idris Ibrahim Cres, Utako, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'playworld.png'

                },
                {
                    locationName: "Magicland",
                    address: " No. 1, Kukwaba Hills, Constitution Ave, Wuye, Kunkwaba",
                    rating: 4.7,
                    pic: 'magicland.png'

                },
                {
                    locationName: "Sunrise Waterpark",
                    address: "Plot 746, Cadastral Zone E17, Sunrise Hills Estate, Sunrise Hills Waterpark, R1 Sunrise Blvd, Street, Kugbo, Abuja, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'sunrise.png'

                },
                {
                    locationName: "BMT Gardens",
                    address: "155 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'bmt.png'

                }
            ]
        },

      ],
      
      categoriesIDs: ["leisure", "shopping-malls", "hotels", "for-the-kids",]
    }
  }/>
  )
}


export default Commercial