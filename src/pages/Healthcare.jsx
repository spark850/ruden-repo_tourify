import Category from "./templates/Category"

function Healthcare() {
  return (
    <Category 
    category={
      {
      categoryName: 'healthcare',
      headingText: "Healthcare",
      categoryImage: "healthcarebackground.png",
      introText: "Prioritizing healthcare while enjoying life is crucial for maintaining overall well-being and longevity. While it's essential to have fun and pursue activities that bring joy and fulfillment, neglecting health can lead to long-term consequences that diminish the quality of life.",
      categories: [
        {
            categoryName: ["Hospitals", "Hospitals"],
            locations: [
                {
                    locationName: "Nizamiye Hospital",
                    address: "394W+MQ4, Cadastral Zone, Life Camp, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'nizamiye.png'

                },
                {
                    locationName: "Nisa Premier Hospital",
                    address: "15/21 Alex Ekwueme Way, Jabi, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'nisa.png'

                },
                {
                    locationName: "Deda Hospital",
                    address: "B07, Cadastral Zone, Plot 1847 Katampe Rd, Kado, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'deda.png'

                },
                {
                    locationName: "Cedacrest Hospital",
                    address: "2 Sam Mbakwe St, Apo, Abuja 900104, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'cedacrest.png'

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
        {
            categoryName: ["Pharmacies", "Pharmacies"],
            locations: [
                {
                    locationName: "Bakan Gizo Pharmacy",
                    address: "Plot 134 Adetokunbo Ademola Cres, opp. ECO Bank, Wuse 2, Abuja 900288, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'bakan.png'

                },
                {
                    locationName: "Healthtrust Pharmacy",
                    address: "40 Lingu Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'health.png'

                },
                {
                    locationName: "H-medix Pharmacy",
                    address: "794 Ahmadu Bello Wy, beside Hmedix Pharmacy, Garki, Abuja 900110, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'hmedix.png'

                },
                {
                    locationName: "Skylark Pharmacy",
                    address: "D9, Sky Memorial Complex, Michael Okpara St, Wuse, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'skylark.png'

                },
                {
                    locationName: "Prime Pharmacy",
                    address: "Oxygen Mall, 1 Lord Lugard St, Asokoro, Abuja 900110, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'prime.png'

                },
                {
                    locationName: "Metro Medicare",
                    address: "45 Libreville Cres, Wuse, Abuja 904101, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'metro.png'

                }
            ]
        },
        {
            categoryName: ["Clinics/Dentals", "Clinics/Dentals"],
            locations: [
                {
                    locationName: "EHA Clinics",
                    address: "Roundabout, Plot 944, Asba and Dantata Street, off Olu Awotesu St, Abuja",
                    rating: 4.7,
                    pic: 'eha.png'

                },
                {
                    locationName: "Abuja Clinic",
                    address: "19 Jos St, Garki, Abuja 900103, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'abuja.png'

                },
                {
                    locationName: "Dara Medical Clinic",
                    address: "6 Ihiala Street, Area 2 Section 2, Garki, Abuja 900242",
                    rating: 4.7,
                    pic: 'dara.png'

                },
                {
                    locationName: "Tulsi Chanrai Eye",
                    address: "Kukwaba, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'tulsi.png'

                },
                {
                    locationName: "Rachel Eye Centre",
                    address: "394W+MQ4, Cadastral Zone, Life Camp, Abuja 900108, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'rachel.png'

                },
                {
                    locationName: "Florida Eye Clinic",
                    address: "432 Ali Muhammad Zarah St, Central Business Dis, Abuja 900103, Federal Capital Territory",
                    rating: 4.7,
                    pic: 'florida.png'
                }
            ]
        },


      ],
      categoriesIDs: ["hospitals", "pharmacies", "clinics",]
    }
  }/>
  )
}

export default Healthcare