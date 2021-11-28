import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Row from '../row/row';

// import ItemList from '../item-list/item-list';
// import ItemDetails from '../item-details/item-details';

import SwapiService from '../../services/swapi-service';
import './app.css';
import ItemDetails from '../item-details/item-details';

export default class App extends Component {

  SwapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/> : null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.SwapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={10}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    )

    return (
      <div className="stardb-app">
        <Header />

        <Row
          left={personDetails}
          right={starshipDetails} />
        {/* { planet }

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage /> */}

        {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.SwapiService.getAllPlanets}
              renderItem={(item) => (<span>{item.name} <button>!</button></span>)}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails itemId={this.state.selectedPerson} />
          </div>
        </div> */}

        {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.SwapiService.getAllStarShips}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}

      </div>
    );

  }
}