import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import { fetchUsers } from "../slices/userSlices";
import { NewCard } from "./NewCard";

const Container = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchUsers())
    },[])
  return (
    <div>
      I am container 
      <Card />
      <NewCard/>
    </div>
  );
};

export default Container;
