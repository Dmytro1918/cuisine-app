
import { useEffect, useState } from "react";
import { request } from "@/app/api";
import { useSearchParams } from "next/navigation";
import { error } from "console";
import Link from "next/link";

interface Recipe {
  id: number;
  title: string;
  image: string;
  preparationTime: string;
}

interface RecipesPageProps {
  recipes: Recipe[];
}


const RecipesPage = ({ recipes }: RecipesPageProps) => {
  const [dishes, setDishes] = useState([])
  const params = useSearchParams()
  useEffect(() => {
  const getData = async () => {
    const query = params?.get('query')
    const cuisine = params?.get('cuisine')
    const maxTime = params?.get('maxReadyTime')
    if(query || cuisine || maxTime){
      const {recipes, error} = await request (query, cuisine, maxTime)
      if(!error) setDishes(recipes) 
    }
  }
  if(params) getData()
  }, [params]);

  return (
    <div className="p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 relative">
        <span className="ring-blue-500">Recipes</span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 transform scale-x-50 origin-left transition duration-300 ease-in-out" />
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
            <li className="border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600">Preparation Time: {recipe.preparationTime} mins</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}  

export default RecipesPage;
