import Category from "./templates/Category"

function Popular() {
  return (
    <Category 
    category={
      {
      categoryName: 'popular',
      headingText: "Popular Locations",
      categoryImage: "lake_mall.jpg",
      introText: "Of course you cant come to Abuja without visiting our best spots, get a good look at the places that make Abuja the capital city. Tourists and residents seem to love these  spots. You should probably check some of them out during your stay here.",
      categories: [
        {
          categoryName: ["Food", "Food"],
          locations: [
              {
                locationName: "Blucabana Restaurant",
                address: "1322 Shehu Yar'adua Wy, Mabushi, Abuja 900108, Federal Capital Territory",
                rating: 4.5,
                pic: 'food/blucabana.jpg'
              },
              {
                locationName: "Street 13",
                address: "Plot C18 Obioma Onyeador Plaza beside DBB Plaza Along, 1st Avenue, Gwarinpa Estate, Gwarinpa",
                rating: 4.5,
                pic: 'street.png'
              },
              {
                locationName: "The Vue",
                address: "3F75+W86 Novare mall, Wuse, 904101, Federal Capital Territory",
                rating: 4.5,
                pic: 'food/thevue.webp'
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
                locationName: "Hans & René",
                address: "75 Aminu Kano Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
                rating: 4.5,
                pic: 'hans.png'
              },
          ]
        }, 
        { 
          categoryName: ["Recreation", "Recreation"],
          locations: [
            {
                locationName: "Jabi lake Mall",
                    address: "Jabi District, Abuja",
                    rating: 4.7,
                    pic: 'lakeMalll.png'
            },
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
                locationName: "Art Tech District",
                address: "Floor, 01, Transcorp Hilton Hotel, No.1, Aguiyi Ironsi Street, Maitama, Abuja, FCT",
                rating: 4.7,
                pic: 'art.png'

            }
            ]
        }, 
        { categoryName: ["Health", "Health"],
        locations: [
            {
                locationName: "Nizamiye Hospital",
                address: "394W+MQ4, Cadastral Zone, Life Camp, Abuja 900108, Federal Capital Territory",
                rating: 4.7,
                pic: 'nizamiye.png'

            },
            {
                locationName: "H-medix Pharmacy",
                address: "794 Ahmadu Bello Wy, beside Hmedix Pharmacy, Garki, Abuja 900110, Federal Capital Territory",
                rating: 4.7,
                pic: 'hmedix.png'

            },
            {
                locationName: "Deda Hospital",
                address: "B07, Cadastral Zone, Plot 1847 Katampe Rd, Kado, Abuja 900108, Federal Capital Territory",
                rating: 4.65,
                pic: 'deda.png'

            },
            {
                locationName: "Abuja Clinic",
                address: "19 Jos St, Garki, Abuja 900103, Federal Capital Territory",
                rating: 4.7,
                pic: 'abuja.png'

            },
            {
                locationName: "Garki Hospital",
                address: "Area 8 Tafawa Balewa Rd, Garki, Abuja 900103, Federal Capital Territory",
                rating: 4.7,
                pic: 'garki.png'

            },
            {
                locationName: "Kelina Hospital",
                address: "34 Crescent 3rd Ave, Gwarinpa, Abuja 900108, Federal Capital Territory",
                rating: 4.7,
                pic: 'kelina.png'

            }
            ]
        }, 
        { categoryName: ["Art & History", "Art & History"],
          locations: [
            {
                locationName: "Discovery Museum",
                rating: 5,
                pic: 'dm.webp',
                address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory"
            },
            {
                locationName: "Nike Art Gallery",
                rating: '4.0',
                pic: 'nike.png',
                address: 'Nike Art Gallery, Elegushi Road, Lekki Phase 1, Lagos'
            },
            {
                locationName: 'Retro Africa Gallery',
                rating: 4.75,
                pic: 'retro.jpeg',
                address: 'Km 7.5 Abuja International Airport Road Abuja Central'
            }
          ]
        },
        { categoryName: ["Nature", "Nature"],
          locations: [
            {
                locationName: "Almat Farm Tour",
                rating: 5,
                pic: 'almat.png',
                address: "ALMAT Drive, Kuje 900105, Federal Capital Territory"
            },
            {
                locationName: "Best of Abuja Tour",
                rating: '4.0',
                pic: 'bestof.png',
                address: "Multiple Locations"
            },
            {
                locationName: 'Romantic Walking Tour',
                rating: 4.75,
                pic: 'romantic.png',
                address: '5 Usuma St, Three Arms Zone, Abuja 900103, Federal Capital Territory'
            }
          ]
        },
      ],
      categoriesIDs: ["food", "recreation", "health", "art-history", "nature"]
    }
  }/>
  )
}

export default Popular