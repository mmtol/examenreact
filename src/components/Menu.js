import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class Menu extends Component 
{
  url = Global.api;

  cargarSeries()
  {
    var endPoint = "/api/Series";
    axios.get(this.url+endPoint).then(response =>
    {
      this.setState({series:response.data});
    })
  }

  componentDidMount=()=>
  {
    this.cargarSeries();
  }

  state=
  {
    series:[]
  }

  render() 
  {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menú</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/crear">Nuevo personaje</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/modificar">Modificar personaje</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Series
                            </a>
                            <ul className="dropdown-menu">
                                {
                                  this.state.series.map((serie, index) =>
                                  {
                                    return(
                                      <li className="nav-item" key={index}>
                                        <NavLink className="nav-link active" aria-current="page" to="/serie/:idSerie">{serie.nombre}</NavLink>
                                      </li>
                                    )
                                  })
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
