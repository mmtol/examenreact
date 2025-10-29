import React, { Component } from 'react'
import {useParams, BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Crear from './components/Crear'
import Modificar from './components/Modificar'
import Serie from './components/Serie'
import Personajes from './components/Personajes'

export default class Router extends Component 
{
  render() 
  {
    function SerieElement()
    {
      let {idSerie} = useParams();
      return <Serie idSerie={idSerie}/>
    }

    function PersonajesElement()
    {
      let {idSerie} = useParams();
      return <Personajes idSerie={idSerie}/>
    }

    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/crear" element={<Crear/>}/>
            <Route path="/modificar" element={<Modificar/>}/>
            <Route path="/serie/:idSerie" element={<SerieElement/>}/>
            <Route path="/personajes/:idSerie" element={<PersonajesElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
