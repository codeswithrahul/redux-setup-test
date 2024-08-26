import { useSelector } from "react-redux"

export const NewCard = () =>{
    const value = useSelector((state) => state.rahul.value)
    console.log(value, 'valueeeeeeeeeeeeeeee')
    return (
        <div>
            hello {value}
        </div>
    )
}