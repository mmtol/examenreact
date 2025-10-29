import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class Home extends Component 
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
        {
          this.state.series.map((serie, index) =>
            {
              return(
                <div key={index}>
                  {/* <img src={serie.imagen} style={{width:"150px", height:"150px"}}/> */}
                  <h2>{serie.nombre}</h2>
                </div>
              )
            })
        }
      </div>
    )
  }
}
