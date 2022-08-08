import React from 'react'
import MovieDetail from '../../modules/movieDetail/movieDetail'
import ShowTime from '../../modules/showTime/showTime'

export default function MovieDetailPage() {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <MovieDetail />
                    </div>
                    <div className="col-12 mt-5">
                        <ShowTime />
                    </div>
                </div>
            </div>
        </div>

    )
}
