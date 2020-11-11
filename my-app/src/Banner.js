import React, {useState,useEffect} from 'react';
import axios from './axios';

import requests from './requests';
const base_url = "https://image.tmdb.org/t/p/original"
const Banner = ({fetchUrl }) => {
    const [movies, setMovies] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            
                console.log(request.data);
                return request;
            }
            fetchData()
        }, []);
return(0)

        
}

export default Banner;
