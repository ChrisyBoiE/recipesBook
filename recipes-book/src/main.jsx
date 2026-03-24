import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeCardComponent from './recipeCard.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeCardComponent />
  </StrictMode>,
)
