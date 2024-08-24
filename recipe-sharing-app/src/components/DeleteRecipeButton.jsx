import useRecipeStore from "./recipeStore";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";

const DeleteRecipeButton = () =>{
    const navigate = useNavigate()
    const recipeId = useParams()
    const deleteRecipe = useRecipeStore(state=>state.deleteRecipe)
        return(
            <div>
                <button
                onClick={()=>{deleteRecipe(recipeId)
                    navigate('/home')
                }}
                >Delete recipe</button>
            </div>
        )
}

export default DeleteRecipeButton