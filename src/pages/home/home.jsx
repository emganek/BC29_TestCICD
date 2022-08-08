import React from 'react'
import Carousel from '../../modules/carousel/carousel'
import MovieList from '../../modules/movieList/movieList'

export default function HomePage() {
  return (
    <div className="py-5">
      <Carousel /> 
      <MovieList />
    </div>
  )
}
