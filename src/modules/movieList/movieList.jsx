import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchMovieListAPI } from '../../services/movies';

export default function MovieList() {
    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchMovieList();
    }, []);

    const fetchMovieList = async () => {
        const movieList = await (await fetchMovieListAPI()).data.content
        setMovieList(movieList);
    }

    const renderMovieList = () => {
        return movieList.map((ele, index) => {
            return (
                <div key={ele.maPhim} className="col-3">
                    <div className="card movie-card" style={{ marginBottom: 20, height: 500 }}>
                        <img style={{ height: 350, objectFit: 'cover' }} className="card-img-top" src={ele.hinhAnh} alt="movie" />
                        <div className="card-body">
                            <h5 className="card-title">{ele.tenPhim}</h5>
                            <button onClick={() => navigate(`/movie/${ele.maPhim}`)} className="btn btn-info">XEM CHI TIẾT</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="row mt-3 mx-auto w-75">
            {renderMovieList()}
        </div>
    )
}
