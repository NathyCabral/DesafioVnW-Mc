import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import CarList from './pages/CardList';
import Hero from './pages/Hero';


function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <CarList />
      <Footer />
    </AppContainer>
  );
}

export default App;
