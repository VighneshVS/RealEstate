import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/aboutUs'
import SearchProperties from '../constants/searchProperties'
import FounderWords from '../components/founderWords'
import Footer from '../components/footer'
import './home.css';

function Home() {
  return (
    <div className="app-Homepage">
    <div className='app-Homepage--headerMain'>
      <Header />
      <main className='headerMain-imgContainer'> 
      </main>
    </div>
    <AboutUs />
    <FounderWords />
    <Footer />
    </div>
  )
}

export default Home