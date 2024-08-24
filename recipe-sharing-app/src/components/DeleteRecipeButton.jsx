import useRecipeStore from "./recipeStore";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";

const DeleteRecipeButton = () =>{
    const navigate = useNavigate()
    const {recipeId} = useParams()
    const id =parseInt(recipeId,10)
    const deleteRecipe = useRecipeStore((state)=>state.deleteRecipe)
        return(
            <div>
                <button
                onClick={()=>{deleteRecipe(id)
                    navigate('/')
                }}
                >Delete recipe</button>
            </div>
        )
}

export default DeleteRecipeButton