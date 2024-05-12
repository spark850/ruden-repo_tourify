import LocationsCategory from "../../components/sections/LocationsCategory"
import Header from "../../components/sections/Header"
import Footer from "../../components/sections/Footer"
import { motion } from "framer-motion"

function Category({category}) {

  return (
    <motion.div 
      className="category" 
      id={`${category.categoryName}`}
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
      <Header/>
      <section className="start">
          <motion.img 
            src={require(`../../assets/images/${category.categoryImage}`)} alt="food" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.3}}
          />
          <h1>{category.headingText}</h1>
      </section>
      <main>
        <p>{category.introText}</p>
        <div className="categoriesBtns">
          {category.categories && category.categories.map((categoryItem, index) => (
            <a  href={`#${category.categoriesIDs[index]}`} key={index} className={`categoryBtn ${index % 2 === 0 ? 'blue' : 'black'}`}>
              {categoryItem.categoryName[0]}
            </a>
          ))}
        </div>
        {category.categories && category.categories.map((categoryItem, index)  =>     <LocationsCategory key={index} data={{
          header: categoryItem.categoryName[1],
          locations: categoryItem.locations,
        }} id={category.categoriesIDs[index]}/>)
        }
      </main>
      <Footer/>
    </motion.div>
  )
}

Category.defaultProps = {
    category: {
      categoryName: 'food',
      headingText: "Food & Drinks in Abuja",
      categoryImage: "food.png",
      introText: "Of course you cant come to Abuja without trying our best spots, where every bite tells a story and every sip is an experience to remember. Indulge your senses as we take you on a journey through our vibrant world of food and drinks, showcasing the best flavors our region has to offer.",
      categories: [
        {
          categoryName: ["Fine Dining", "Fine Dining Tables"],
          locations: [
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            }
          ]
        }, 
        { 
          categoryName: ["Fast Food", "Fast Food"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        }, 
        { categoryName: ["Native Food", "Native Food"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        }, 
        { categoryName: ["Ice-Cream", "Ice-Cream"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        },
        { categoryName: ["Chinese / Asian", "Chinese / Asian"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        },
        {
          categoryName: ["Italian", "Italian"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        },
        {
          categoryName: ["Shawarma", "Shawarma"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        },
        {
          categoryName: ["Cafe", "Cafe"],
          locations: [
            [
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              },
              {
                locationName: "Jabi Lake Mall",
                address: "Bala Sokoto Way, Jabi, Abuja",
                rating: 4.5,
                pic: 'lake_mall.jpg'
              }
            ]
          ]
        }
      ],
      categoriesIDs: ["fine-dining", "fast-food", "native-food", "ice-cream", "chinese-asian", "italian", "shawarma", "cafe"]
    }
}

export default Category