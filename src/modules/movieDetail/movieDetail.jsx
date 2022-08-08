import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieDetaiAPI } from '../../services/movies';

export default function MovieDetail() {
    const params = useParams().movieID;

    const [movieDetail, setMovieDetail] = useState({});

    useEffect(()=>{
        fetchMovieDetail();
    },[]);

    const fetchMovieDetail = async () =>{
        const data = await (await fetchMovieDetaiAPI(params)).data.content;
        setMovieDetail(data)
    }

    return (
        <div className="row">
            <div className="col-3">
                <img className="w-100" src={movieDetail.hinhAnh} alt='alt' />
            </div>
            <div className="col-9">
                <h4>{movieDetail.tenPhim}</h4>
                <p>{movieDetail.moTa}</p>
                <p>{movieDetail.ngayKhoiChieu}</p>
                <div>
                    <button className="btn btn-info mr-2">TRAILER</button>
                </div>
            </div>
        </div>
    )
}
