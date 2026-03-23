import { useEffect, useState } from 'react';
import './App.css'
import { Recipe } from './recipeType/type';

function App() {
  const [data, setData] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => {
        if (!res.ok) {
          throw new Error('Hiba történt a letöltés során!')
        }
        return res.json();
      })
      .then(json => {
        setData(json.recipes);
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Betöltés...</p>
  if (error) return <p>Hiba történt a letöltés során!</p>

  return (
    <div>
      <div className='filterForDifficulty'>
        <button>Összes</button>
        <button>Könnyű</button>
        <button>Közepes</button>
        <button>Nehéz</button>
      </div>
      <div className='containerForRecipes'>
        {data?.map(recipe => (
          <div key={recipe.id}>
            <div className="cardForRecipe">
              <h2>{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name} />
              <p>Nehézségi szint: {recipe.difficulty}</p>
              <p>Kalória: {recipe.caloriesPerServing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
