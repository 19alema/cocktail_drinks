import React,{useEffect, useState} from 'react'
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';
import CockTail from '../components/cockTail';
function CockTails() {
  const [cocktail, setCockTail] = useState([]);
  const [search, setSearch] = useState("a")
  const [loading, setLoading] = useState(true);

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const fetchDrinks = async () => {
    try {
      const response = await fetch((`${url}${search}`))
      const data = await response.json()
      setCockTail(data.drinks);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

 
  
  useEffect(() => {
    fetchDrinks()
  }, [search])

  if (!cocktail) {
    return (
      <div className="container h-screen flex-col text-center flex justify-center items-center">
        <i class="material-icons text-[8em] py-4">sentiment_dissatisfied</i>
        
        <div className="pb-4">
          <h1 className="pb-2 text-2xl font-bold">Oops!!, Sorry</h1>
          <p className="font-semibold">No Cocktail of your choice Found!!</p>
        </div>
      </div>
    )
  }

    return (
      <div>
        <SearchBox setSearch={setSearch} />
        <div className="container  sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading && <Loader />}
          
          {!loading && (
            cocktail.map((drink) => {
              return (
                <CockTail
                  key={drink.idDrink}
                  id={drink.idDrink}
                  img={drink.strDrinkThumb}
                  name={drink.strDrink}
                  glass={drink.strGlass}
                  category={drink.strCategory}
                />
          
              )
            })
          )}
        </div>
      </div>
    )
  }



export default CockTails