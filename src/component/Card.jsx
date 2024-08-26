import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../slices/stateSlice";

const Card = () =>{
    const dispatch = useDispatch()
    const productsData = useSelector((state) => state.users)
    console.log(productsData,'product data')
    return (
        <div onClick={() => dispatch(setValue("passing state one to OTHER"))}>hello MR. Redux.</div>
    )
}

export default Card;