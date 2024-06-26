import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import CarList from './pages/CardList';
import Hero from './pages/Hero';


const AppContainer = styled.div``;

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
