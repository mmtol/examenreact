import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class Modificar extends Component 
{
  url = Global.api;

  selectSerie = React.createRef();
  selectPersonaje = React.createRef();

  cargarSeries=()=>
  {
    var endPoint = "api/Series";
    axios.get(this.url+endPoint).then(response =>
    {
      this.setState({series:response.data});
    })
  }

  cargarPersonajes=()=>
  {
    var endPoint = "api/Personajes";
    axios.get(this.url+endPoint).then(response =>
    {
      this.setState({personajes:response.data});
    })
  }

  modificarPersonaje=(event)=>
  {
    event.preventDefault();

    var idPersonaje = parseInt(this.selectPersonaje.current.value);
    var nombre;
    var imagen;
    var idSerie = parseInt(this.selectSerie.current.value);

    for (var personaje of this.state.personajes)
    {
      if (personaje.idPersonaje == idPersonaje)
      {
        nombre = personaje.nombre;
        imagen = personaje.imagen;
      }
    }

    var endPoint = "api/Personajes/"+idPersonaje+"/"+idSerie;
    var personaje=
    {
      idPersonaje:idPersonaje,
      nombre:nombre,
      imagen:imagen,
      idSerie:idSerie
    }

    axios.put(this.url+endPoint, personaje).then(response =>
    {
      this.setState({status:true});
    })
  }

  componentDidMount=()=>
  {
    this.cargarSeries();
    this.cargarPersonajes();
  }

  state=
  {
    series:[],
    personajes:[],
    status:false
  }

  render() 
  {
    return (
      <div>
        {
          this.state.status == true &&
          <Navigate to={"/personajes/"+parseInt(this.selectSerie.current.value)}/>
        }
        <h1>Modificar personaje</h1>
        <hr/>
        <form>
          <label>Serie</label>
          <br/>
          <select ref={this.selectSerie}>
            {
              this.state.series.map((serie, index) =>
              {
                return(
                <option key={index} value={serie.idSerie}>{serie.nombre}</option>)
              })
            }
          </select>
          <br/>
          <label>Personaje</label>
          <br/>
          <select ref={this.selectPersonaje}>
            {
              this.state.personajes.map((personaje, index) =>
              {
                return(
                <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>)
              })
            }
          </select>
          <br/>
          <button onClick={this.modificarPersonaje}>Modificar personaje</button>
        </form>
      </div>
    )
  }
}
