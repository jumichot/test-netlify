import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query  } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cj7ablmdx0akm01070x1jozmi"
});


const ExchangeRates = () => (
  <Query
    query={gql`
      {
        allPlaces {
          id
          name
          country {
            id
            name
          }
        }
      }
    `} >

    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allPlaces.map(({ name }) => (
        <div key={name}>
          <p>{`name: ${name}`}</p>
        </div>
      ));
    }}

  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome Nours !</h1>
          </header>
          <div className="App-intro">
            <ExchangeRates />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
