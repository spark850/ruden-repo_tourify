import Category from "./templates/Category"

function Food() {
  return (
    <Category 
    category={
      {
      categoryName: 'food',
      headingText: "Food & Drinks in Abuja",
      categoryImage: "food.png",
      introText: "Of course you cant come to Abuja without trying our best spots, where every bite tells a story and every sip is an experience to remember. Indulge your senses as we take you on a journey through our vibrant world of food and drinks, showcasing the best flavors our region has to offer.",
      categories: [
        {
          categoryName: ["Fine Dining", "Fine Dining"],
          locations: [
              {
                locationName: "Blucabana Restaurant",
                address: "1322 Shehu Yar'adua Wy, Mabushi, Abuja 900108, Federal Capital Territory",
                rating: 4.5,
                pic: 'food/blucabana.jpg'
              },
              {
                locationName: "Tullip Bistro",
                address: "141 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal Capital Territory",
                rating: 4.5,
                pic: 'tulip.png'
              },
              {
                locationName: "A-Class Restaurant",
                address: "Plot 102 Along, Kashim Ibrahim Wy, Maitama, Abuja",
                rating: 4.5,
                pic: 'aclass.png'
              },
              {
                locationName: "The Vue",
                address: "3F75+W86 Novare mall, Wuse, 904101, Federal Capital Territory",
                rating: 4.5,
                pic: 'food/thevue.webp'
              },
              {
                locationName: "Chopsticks & Caesar's",
                address: "52 Mississippi St, Maitama, Abuja 904101, Federal Capital Territory",
                rating: 4.5,
                pic: 'chopsticks.png'
              },
              {
                locationName: "Zuma grill",
                address: "Floor, 01, Transcorp Hilton Hotel, No.1, Aguiyi Ironsi Street, Maitama, Abuja, FCT",
                rating: 4.5,
                pic: 'zuma.png'
              }
          ]
        }, 
        { 
          categoryName: ["Fast Food", "Fast Food"],
          locations: [
            {
              locationName: "Dominos Pizza",
              address: "Aminu Kano Crescent, 52 Kumasi Cres, Wuse, Abuja",
              rating: 4.5,
              pic: 'dominos.png'
            },
            {
              locationName: "Johnny Rockets",
              address: "215 Konoko Cres, Wuse, Abuja 900288, Federal Capital Territory",
              rating: 4.5,
              pic: 'johnny.png'
            },
            {
              locationName: "Street 13",
              address: "Plot C18 Obioma Onyeador Plaza beside DBB Plaza Along, 1st Avenue, Gwarinpa Estate, Gwarinpa",
              rating: 4.5,
              pic: 'street.png'
            },
            {
              locationName: "Downtown Takeaway",
              address: "38 Gana St, Maitama, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'downtown.png'
            },
            {
              locationName: "Burger King",
              address: "24 Durban St, Wuse 2, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'burger.png'
            },
            {
              locationName: "Truckadero by Citybowl",
              address: "131b Adetokunbo Ademola Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'truckadero.png'
            }
          ]
        }, 
        { categoryName: ["Native Food", "Native Food"],
          locations: [
            {
              locationName: "Jevinik Restaurant",
              address: "494 Bangui St, Wuse 2, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'jevinik.png'
            },
            {
              locationName: "Iya Oyo",
              address: " 112 Idris Gidado St, Wuye, Ankuru 900108, Federal Capital Territory",
              rating: 4.5,
              pic: 'iya.png'
            },
            {
              locationName: "Nkoyo",
              address: "Ceddi Plaza, 264 Tafawa Balewa Rd, Central Area, Abuja 900211, Federal Capital Territory",
              rating: 4.5,
              pic: 'nkoyo.png'
            },
            {
              locationName: "Biobak Restaurant",
              address: "9 Malabo Street, Off Aminu Kano Cres, Wuse 2, Abuja 900288",
              rating: 4.5,
              pic: 'biobak.png'
            },
            {
              locationName: "Hungryma Restaurant",
              address: "141 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'hungryma.png'
            },
            {
              locationName: "Akara Cafe",
              address: "Zone 5, Accra St, opp. Istrom Real Estate, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'akara.png'
            }
        ]
        }, 
        { categoryName: ["Creamy Indulgencies", "Creamy Indulgencies"],
          locations: [
            {
              locationName: "Coldstone Creamery",
              address: "52 Aminu Kano Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'coldstone.png'
            },
            {
              locationName: "Nosta Cafe",
              address: "2 Atakpame St, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'nosta.png'
            },
            {
              locationName: "Pinkberry Gourmet Froyo",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'pinkberry.png'
            },
            {
              locationName: "Hans & René",
              address: "75 Aminu Kano Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'hans.png'
            },
            {
              locationName: "Hatlab Gelato",
              address: "plot 1952 Sokode crescent Wuse zone 5 Abuja. Also located as vendors at some schools.",
              rating: 4.5,
              pic: 'hatlab.png'
            },
            {
              locationName: "Movenpick Swiss Icecream",
              address: "Samuel Ladoke Akintola Boulevard, Garki, Abuja 900110, Federal Capital Territory",
              rating: 4.5,
              pic: 'movenpick.png'
            }
          ]
        },
        { categoryName: ["Chinese / Asian", "Chinese / Asian"],
          locations: [
            {
              locationName: "Macoriano Chinese Restaurant",
              address: "33 Gana St, Maitama, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'macoriano.png'
            },
            {
              locationName: "Sinoni Chinese Restaurant",
              address: "Area 1 Shopping Centre, opp. Nipost, Garki, Abuja 900103, Federal Capital Territory",
              rating: 4.5,
              pic: 'sinoni.png'
            },
            {
              locationName: "Silk Road Restaurant",
              address: "Plot 770, Sinoki house, off Samuel Ademulegun Ave, opposite Federal Ministry of Transport, Central Business District, Abuja",
              rating: 4.5,
              pic: 'silk.png'
            },
            {
              locationName: "Woks & Koi",
              address: "18 Durban St, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'woks.png'
            },
            {
              locationName: "4 Guys Restaurant",
              address: "913 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'guys.png'
            },
            {
              locationName: "Golden Gate Restaurant",
              address: "Zone 5, 1994 Mombasa St, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'golden.png'
            }
          ]
        },
        {
          categoryName: ["Italian", "Italian"],
          locations: [
            {
              locationName: "Cantina Restaurant",
              address: "30 Yedseram St, Maitama, Abuja 900271, Federal Capital Territory",
              rating: 4.5,
              pic: 'cantina.png'
            },
            {
              locationName: "Irie Resto Lounge",
              address: "Jabi lake mall, Jabi, Abuja 900108, Federal Capital Territory",
              rating: 4.5,
              pic: 'irie.png'
            },
            {
              locationName: "La Taverna",
              address: "5th Floor, Statement Hotel, First Ave, Wuse, Abuja 900103, Federal Capital Territory",
              rating: 4.5,
              pic: 'la.png'
            },
            {
              locationName: "Luigi's Italian Restaurant",
              address: "Sheraton Abuja Hotel, Ladi Kwali Way, Maitama, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Haraya Restaurant",
              address: "Block 5, 2 Bria St, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'haraya.png'
            },
            {
              locationName: "Aldo's Restaurant",
              address: "Plot 466 Alex Ekwueme Way, Jabi, Abuja 900108, Federal Capital Territory",
              rating: 4.5,
              pic: 'aldo.png'
            }
          ]
        },
        {
          categoryName: ["Shawarma", "Shawarma"],
          locations: [
            {
              locationName: "Chicken Capitol",
              address: "4 Lingu Cres, off Aminu Kano Crescent, behind Hyde filling station, Wuse II, Abuja 900288, Federal Capital Territory",
              rating: 4.5,
              pic: 'chicken.png'
            },
            {
              locationName: "Jamals Shawarma",
              address: "Riverplate Park, 147 Ahmadu Bello Wy, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'jamals.png'
            },
            {
              locationName: "Caleb's Confectionary",
              address: "by Aso savings bank, 2/2 junction, Kubwa",
              rating: 4.5,
              pic: 'caleb.png'
            },
            {
              locationName: "Ahmad's Shawarma",
              address: "3 32 Cres, opp. Evelyn Garden, Gwarinpa Estate, Abuja 900108, Federal Capital Territory",
              rating: 4.5,
              pic: 'ahmad.png'
            },
            {
              locationName: "Shawarma Et Al Abuja",
              address: "90 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'shawarma.png'
            },
            {
              locationName: "Dark Room by the yellow Plate",
              address: "zone 1, 11 Isoka Street, Wuse, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'dark.png'
            }
          ]
        },
        {
          categoryName: ["Cafe", "Cafe"],
          locations: [
            {
              locationName: "Wells Café and Bakehouse",
              address: "2 Gado Nasko St, Asokoro, Abuja 900110, Federal Capital Territory",
              rating: 4.5,
              pic: 'wells.png'
            },
            {
              locationName: "UR Café ",
              address: "The Tropic Plaza, 269 Muhammad I, Mohammadu Buhari Way, Central Business District, Abuja",
              rating: 4.5,
              pic: 'ur.png'
            },
            {
              locationName: "The Living Room",
              address: "1 Thaba Tseka St, Wuse 2, Abuja 904101, Federal Capital Territory",
              rating: 4.5,
              pic: 'the.png'
            },
            {
              locationName: "Strobrie Café",
              address: "HFIA Garden, Off Tafawa Balewa Rd, Garki, Abuja 900103, Federal Capital Territory",
              rating: 4.5,
              pic: 'strobrie.png'
            },
            {
              locationName: "Café Chocolat",
              address: "No 3, Cairo Crescent, Wuse 2",
              rating: 4.5,
              pic: 'cafe.png'
            },
            {
              locationName: "Café Dimanche",
              address: "Food City at, Bangui St, Wuse II",
              rating: 4.5,
              pic: 'cafed.png'
            }
          ]
        }
      ],
      categoriesIDs: ["fine-dining", "fast-food", "native-food", "creamy-indulgencies", "chinese-asian", "italian", "shawarma", "cafe"]
    }
  }/>
  )
}

export default Food