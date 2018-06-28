/* Core */
import React, { Component } from 'react';
/* Helpers */
import { Link, Redirect } from 'react-router-dom';


export default class EventList extends Component {
  
  render() {
    
    return (
      <div className="container">
        <table className="table table-striped table-bordered table-responsive-md" cellSpacing="0" width="100%">
          <thead className="thead-dark">
            <tr>
            <th scope="col">DATA</th>
            <th scope="col">EVENTO</th>
            <th scope="col">DESCRIÇÃO</th>
            <th scope="col">LOCAL</th>
            </tr>
          </thead>
      <tbody>
        <tr>
        <th scope="row">22/09/2018</th>
        <td>Congresso UFBA</td>
        <td>Lorem Ipsum é simplesmente uma simulação de texto</td>
        <td>UFBA - ONDINA</td>
        </tr>
        <tr>
          <th scope="row">22/09/2018</th>
          <td>Sarau</td>
          <td>Lorem Ipsum é simplesmente uma simulação de texto</td>
          <td>UFBA - FEDERAÇÃO</td>
        </tr>
        <tr>
          <th scope="row">22/09/2018</th>
          <td>Paredão da FACOM</td>
          <td>Lorem Ipsum é simplesmente uma simulação de texto</td>
          <td>São Lazáro</td>
        </tr>
        <tr>
          <th scope="row">22/09/2018</th>
          <td>Seminário sobre Racismo</td>
          <td>Lorem Ipsum é simplesmente uma simulação de texto</td>
          <td>PAF 3</td>
        </tr>
        <tr>
          <th scope="row">22/09/2018</th>
          <td>Congresso UFBA</td>
          <td>Lorem Ipsum é simplesmente uma simulação de texto</td>
          <td>UFBA - ONDINA</td>
        </tr>
      </tbody>
      </table>
      </div>
    )
  }
}

