
import React ,{useEffect} from 'react'
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom'

export default function RecommendationsList () {

    const recommendations = useRecipeStore(state=>state.recommendations)
    const generateRecommendations = useRecipeStore(state=>state.generateRecommendations)
    useEffect(()=>{
        generateRecommendations()
      },[])
  return (
    <div>
        <h1>Recommendations</h1>
        {recommendations.map(rec=>
                <div key={rec.id}>
                    <h3>{rec.title}</h3>
                    <p>{rec.description}</p>
                </div>
            )
        }
        <Link to='/'>Recipes List</Link>

    </div>
  )
}