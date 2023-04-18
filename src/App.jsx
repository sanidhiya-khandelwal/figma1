import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Product from './components/ProductList'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'
import FooterEnd from './components/FooterEnd'
const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Product />
      <SocialMedia />
      <Footer />
      <FooterEnd />
    </div>
  )
}

export default App