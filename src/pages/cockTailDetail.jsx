import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'

function CockTailDetail() {
  const [drink, setDrink] = useState([])
  const { id } = useParams()
  console.log(id)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

useEffect(() => {
  if (id) {
    axios.get(url).then(response => {
      setDrink(response.data?.drinks[0]);
      console.log(response.data.drinks)
     })
  }
},[])
  
  return (
    <div>
      <Link to="/" className="items-center flex align-center justify-center">
        <button className="btn bg-green-600 rounded my-5 block">Back Home</button>
      </Link>
            
               
      <h1 className="text-center py-5 font-extrabold text-3xl uppercase">The Drink Detail</h1>

      <h2 className="text-center py-4 font-[900] text-2xl">{drink?.strDrink}</h2>
      <div className="container flex align-center justify-center flex-col max-w-[1000px] m-auto md:grid grid-cols-2 md:gap-4 md:items-center">
       
        <img src={drink?.strDrinkThumb} alt={drink?.strDrink} className="rounded block" />
        <div className="py-4">
          <div className="flex items-center py-4">
            <p className="p-2 text-gray-800 text-2xl font-bold bg-green-400 rounded">Name:</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strDrink}</p>
          </div>
          <div className="flex items-center py-4">
            <p className="p-2 text-gray-800 text-2xl font-bold bg-green-400 rounded">Category:</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strCategory}</p>
          </div>
          <div className="flex items-center py-4">
            <p className="p-2 text-gray-800 text-2xl font-bold bg-green-400 rounded">Info:</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strAlcoholic}</p>
          </div>
          <div className="flex items-center py-4">
            <p className="p-2 text-gray-800 text-2xl font-bold bg-green-400 rounded">Glass:</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strGlass}</p>
          </div>
          <div className="flex items-center py-4">
            <p className="p-2 text-gray-800 text-2xl font-bold bg-green-400 rounded">Instructions:</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strInstructions}</p>
          </div>
          <div className="flex items-center py-4">
            <p className="p-2 text-gray-800 text-2xl font-bold bg-green-400 rounded">Ingredient:</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strIngredient1}</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strIngredient2}</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strIngredient3}</p>
            <p className="pl-2 text-xl font-bold text-gray-800">{drink?.strIngredient4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CockTailDetail