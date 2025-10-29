import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class Crear extends Component 
{
  url = Global.api;

  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  selectSerie = React.createRef();

  cargarSeries=()=>
  {
    var endPoint = "api/Series";
    axios.get(this.url+endPoint).then(response =>
    {
      this.setState({series:response.data});
    })
  }

  crearPersonaje=(event)=>
  {
    event.preventDefault();

    var endPoint = "api/Personajes";
    var nombre = this.cajaNombre.current.value;
    var imagen = this.cajaImagen.current.value;
    var serie = parseInt(this.selectSerie.current.value);

    var personaje=
    {
      idPersonaje:0,
      nombre:nombre,
      imagen:imagen,
      idSerie:serie
    }
    axios.post(this.url+endPoint, personaje).then(response =>
    {
      console.log("creado");
      this.setState({status:true});
    })
  }

  componentDidMount=()=>
  {
    this.cargarSeries();
  }

  state=
  {
    series:[],
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
        <h1>Crear personaje</h1>
        <hr/>
        <form>
          <label>Nombre</label>
          <br/>
          <input type="text" ref={this.cajaNombre}/>
          <br/>
          <label>Imagen</label>
          <br/>
          <input type="text" ref={this.cajaImagen}/>
          <br/>
          <label>Nombre</label>
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
          <button onClick={this.crearPersonaje}>Crear personaje</button>
        </form>
      </div>
    )
  }
}
