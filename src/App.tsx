import React from 'react';

import './App.css';
import Header from './components/Header';
import MainLayout from './layout/MainLayout';
import Router from './router/Router';

function App() {
  return (
    <MainLayout>
      <Header />
    <Router />
    </MainLayout>
  );
}

export default App;
