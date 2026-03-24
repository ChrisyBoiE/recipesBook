import { useEffect, useState } from 'react';
import './recipeCard.css'
import { Recipe } from './interfaces/recipe';
import RecipeDetailComponent from './recipeDetailComponent/recipeDetail';

function RecipeCardComponent() {
  const [data, setData] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [basket, setBasket] = useState<string[]>([]);

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

  const toggleIngredient = (ingredient: string) => {
    setBasket(prev =>
      prev.includes(ingredient)
        ? prev.filter(item => item !== ingredient)
        : [...prev, ingredient]
    );
  };

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
          <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
            <div className="cardForRecipe">
              <h2>{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name} />
              <p>Nehézségi szint: {recipe.difficulty}</p>
              <p>Kalória: {recipe.caloriesPerServing}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <RecipeDetailComponent
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          basket={basket}
          onToggleIngredient={toggleIngredient}
        />
      )}

      {basket.length > 0 && (
        <div className="shopping-bag-fab">
          Kiválasztott tételek: {basket.length} db
        </div>
      )}
    </div>
  )
}

export default RecipeCardComponent
