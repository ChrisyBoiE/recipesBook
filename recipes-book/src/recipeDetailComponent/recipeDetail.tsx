import { RecipeDetailProps } from "../interfaces/recipeDetailProps";
import './recipeDetail.css'

function RecipeDetailComponent({ recipe, onClose, basket, onToggleIngredient }: RecipeDetailProps) {
    return (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <h2>{recipe.name}</h2>
                    <div className="close-btn" onClick={onClose}>&times;</div>
                </div>

                <div className="imageContainer">
                    <img src={recipe.image} alt={recipe.name} />
                </div>

                <div className="recipe-meta">
                    <div className="meta-item">
                        <span>Elkészítési idő</span>
                        <span>{recipe.prepTimeMinutes} perc</span>
                    </div>
                    <div className="meta-item">
                        <span>Főzési idő</span>
                        <span>{recipe.cookTimeMinutes} perc</span>
                    </div>
                    <div className="meta-item">
                        <span>Adag</span>
                        <span>{recipe.servings}</span>
                    </div>
                    <div className="meta-item">
                        <span>Kalória</span>
                        <span>{recipe.caloriesPerServing} kcal</span>
                    </div>
                    <div className="meta-item">
                        <span>Értékelés</span>
                        <span>{recipe.rating} ⭐</span>
                    </div>
                </div>

                <div className="details-grid">
                    <div className="details-section">
                        <h3 className="section-title">Hozzávalók</h3>
                        <ul className="ingredient-list">
                            {recipe.ingredients.map((item, index) => (
                                <li key={index} className="ingredient-item">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={basket.includes(item)}
                                            onChange={() => onToggleIngredient(item)}
                                        />
                                        <span>{item}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="details-section">
                        <h3 className="section-title">Elkészítés</h3>
                        <ol>
                            {recipe.instructions.map((recipeValue, index) => (
                                <li key={index}>{recipeValue}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailComponent