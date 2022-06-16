import React from 'react'
import { Link } from 'react-router-dom';
function CockTail({img, name, category,glass, id}) {
  return (
    <div className="my-5 shadow-xl rounded hover:shadow-2xl">
        <img className="border-tl-rounded" src={img} alt={name} />
            <div className=" p-8">
              <h3 className="font-bold py-4 text-2xl">{name}</h3>
              <p className="text-xl">{glass}</p>
              <p className="font-thin py-2 text-xl">{category}</p>
                <Link to={`cocktail/${id}`}>
                    <button className="rounded font-thin hover:bg-green-500 text-sm bg-green-700 text-white py-2 px-2">DETAILS</button>
                </Link>
            </div>
    </div>
  )
}

export default CockTail