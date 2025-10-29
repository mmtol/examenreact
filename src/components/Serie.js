import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Button } from 'bootstrap';
import { NavLink } from 'react-router-dom';

export default class Serie extends Component 
{
    url = Global.api;

    mostrarSerie()
    {
        var endPoint = "api/Series/"+parseInt(this.props.idSerie);
        axios.get(this.url+endPoint).then(response =>
        {
            this.setState({serie:response.data});
        })
    }

    state=
    {
        serie:[]
    }

    render() 
    {
        return (
        <div>
            {
                this.state.serie &&
                <div>
                    <img src={this.state.serie.imagen} style={{width:"200px", height:"200px"}}/>
                    <h1>{this.state.serie.nombre}</h1>
                    <h2>IMDB: {this.state.serie.puntuacion}</h2>
                    <button><NavLink className="nav-link active" aria-current="page" to={"/personajes/"+this.props.idSerie}>Personajes</NavLink></button>
                </div>
            }
        </div>
        )
    }
}
