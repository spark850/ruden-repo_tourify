import LocationCategory from "../items/LocationCategory"
import { useNavigate } from "react-router-dom"

function RelatedLocations({data}) {
  const navigator = useNavigate()

  return (
    <section id="related" className="locationsGroup">
      <h1>Related</h1>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationCategory key={index} location={location}/>)}
      </div>
      <p className="full_list" onClick={() => {navigator('/popular')}}>See More</p>
    </section>
  )
}

RelatedLocations.defaultProps = {
    data: {
        header: "Popular Locations",
        text: "Tourists and residents seem to love these  spots. You should probably check some of them out during your stay here.",
        locations: [
          {
              locationName: "Discovery Museum",
              rating: 5,
              pic: 'dm.webp',
              address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory"
          },
          {
              locationName: 'Retro Africa Gallery',
              rating: 4.75,
              pic: 'retro.jpeg',
              address: 'Km 7.5 Abuja International Airport Road Abuja Central'
          }
      ]
    }
}

export default RelatedLocations