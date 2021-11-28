import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';

import SwapiService from '../../services/swapi-service';
import './people-page.css';

export default class PeoplePage extends Component {

  SwapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.SwapiService.getAllPeople}
      >
        {(item) => (
          `${item.name} (${item.birthYear})`
        )}
      </ItemList>
    )
    const personDetails = ( <ItemDetails itemId={this.state.selectedPerson} /> )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
