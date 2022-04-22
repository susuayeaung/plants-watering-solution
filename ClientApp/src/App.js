import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePlant from './components/CreatePlant';
import { getAllPlants, createPlant } from './services/PlantService';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { DisplayBoard } from './components/DisplayBoard';
import { Plants } from './components/Plants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  state = {
    plant: {},
    plants: [],
    numberOfPlants: 0
  }

  createPlant = (e) => {
    createPlant(this.state.plant)
      .then(response => {
        console.log(response);
        this.setState({numberOfPlants: this.state.numberOfPlants + 1})
    });
  } 

  getAllPlants = () => {
    getAllPlants()
      .then(plants => {
        console.log(plants)
        this.setState({plants: plants, numberOfPlants: plants.length})
      });
  }

  onChangeForm = (e) => {
    let plant = this.state.plant
    if (e.target.name === 'plantname') {
        plant.plantName = e.target.value;
    } else if (e.target.status === 'wateringStatus') {
        plant.wateringStatus = e.target.value;
    }
    this.setState({plant})
  }

  render () {
    return (
      <div className="App">
        <Home></Home>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreatePlant
                  onChangeForm={this.onChangeForm}
                  createPlant={this.createPlant}
                  >
                </CreatePlant>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfPlants={this.state.numberOfPlants}
                  getAllPlants={this.getAllPlants}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Plants plants={this.state.plants}></Plants>
        </div>
      </div>
    );
  }
}
