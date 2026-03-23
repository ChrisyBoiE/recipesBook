import { useEffect, useState } from 'react';
import './App.css'
import { Recipe } from './recipeType/type';

function App() {
  const [data, setData] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

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

  const filteredRecipes = filter
    ? data?.filter(recipe => recipe.difficulty === filter)
    : data;

  return (
    <div>
      <div className='filterForDifficulty'>
        <button onClick={() => setFilter(null)}>Reset</button>
        <button onClick={() => setFilter('Easy')}>Easy</button>
        <button onClick={() => setFilter('Medium')}>Medium</button>
        <button onClick={() => setFilter('Hard')}>Hard</button>
      </div>
      <div className='containerForRecipes'>
        {filteredRecipes?.map(recipe => (
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
