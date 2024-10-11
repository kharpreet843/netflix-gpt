import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utilis/movieSlice";
import { API_OPTIONS } from "../../utilis/constants";
import { useEffect } from "react";

const usePopular=()=>{
    const dispatch=useDispatch();
  const GetMovies=async ()=>{
    const response= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const jsonData=await response.json();
    dispatch(addPopularMovies(jsonData.results));
   }
   useEffect(()=>{
    GetMovies();
   },[])
}

export default usePopular;