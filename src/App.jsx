import React from 'react'
import './App.css'

// 4 - Navegando entre páginas
import Header from './header/header'

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;