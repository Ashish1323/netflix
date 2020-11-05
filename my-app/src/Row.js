import React, {useState,useEffect} from 'react';
import axios from './axios';

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                console.log(request.data);
                return request;
            }
            fetchData()
        }, [fetchUrl]);

        return (
        <div>
            {title}
        </div>
    );
}

export default Row;
