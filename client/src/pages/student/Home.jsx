import React from 'react'
import Hero from '../../components/students/Hero'
import SearchBar from '../../components/students/SearchBar'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 '>
      <Hero/>
      <SearchBar/>
    </div>
  )
}

export default Home