import React, { Component } from 'react'
import Menu from './components/Menu'
import Home from './components/Home'
import Crear from './components/Crear'
import Modificar from './components/Modificar'
import Serie from './components/Serie'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/crear" element={<Crear/>}/>
            <Route path="/modificar" element={<Modificar/>}/>
            <Route path="/serie" element={<Serie/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
