import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios';

export default class Personajes extends Component 
{
  url = Global.api;

  sacarPersonajes()
  {
    var endPoint = "api/Personajes";
    axios.get(this.url+endPoint).then(response =>
    {
      var aux = [];
      for (var personaje of response.data)
      {
        if (personaje.idSerie == parseInt(this.props.idSerie))
        {
          aux.push(personaje);
        }
      }
      this.setState({personajes:aux});
    })
  }

  componentDidMount=()=>
  {
    this.sacarPersonajes();
  }

  state=
  {
    personajes:[]
  }

    render() 
    {
      return (
        <div>
          <h1>Personajes de {this.props.idSerie}</h1>
          <button><NavLink className="nav-link active" aria-current="page" to={"/serie/"+this.props.idSerie}>Volver a serie</NavLink></button>
          <table>
            <thead>
              <tr>
                <th>Personaje</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.personajes.map((personaje, index)=>
                {
                  return(
                  <tr key={index}>
                    <td>{personaje.nombre}</td>
                    <td><img src={personaje.imagen} style={{width:"200px", height:"200px"}}/></td>
                  </tr>
                )
                })
              }
            </tbody>
          </table>
        </div>
      )
    }
}
