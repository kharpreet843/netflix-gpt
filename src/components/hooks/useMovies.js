import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../../utilis/movieSlice";
import { API_OPTIONS } from "../../utilis/constants";
import { useEffect } from "react";

const useMovies=()=>{
    const dispatch=useDispatch();
  const GetMovies=async ()=>{
    const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const jsonData=await response.json();
    dispatch(addNowplayingMovies(jsonData.results));
   }
   useEffect(()=>{
    GetMovies();
   },[])
}

export default useMovies;