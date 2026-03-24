import { Recipe } from "./recipe";

export interface RecipeDetailProps {
    recipe: Recipe;
    onClose: () => void;
    basket: string[];
    onToggleIngredient: (ingredient: string) => void;
}