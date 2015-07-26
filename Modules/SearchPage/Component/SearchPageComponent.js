'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router';

// var styles = StyleSheet.create({
//   description: {
//     marginBottom: 20,
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#656565'
//   },
//   container: {
//     padding: 30,
//     marginTop: 65,
//     alignItems: 'center'
//   },
//   flowRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'stretch'
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 36,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   },
//   searchInput: {
//     height: 36,
//     padding: 4,
//     marginRight: 5,
//     flex: 4,
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#48BBEC',
//     borderRadius: 8,
//     color: '#48BBEC'
//   },
//   image: {
//     width: 217,
//     height: 138
//   }
// });

class SearchPageComponent  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: 'london'
    };
  }

  // resultsFounds() {
  //   var results = SearchPageStore.getResults();
  //   var formatedLocation = results && results.location ? results.location : '';
  //
  //   this.setState({
  //     searchString: formatedLocation,
  //     isLoading: false,
  //     resultError: SearchPageStore.getResultError(),
  //     results: results
  //   });
  //
  //   // if (results && results.listings &&
  //   //   (this.state.resultError === '' || !this.state.resultError))
  //   //   // SearchPageOutput.goToNextModule(this, results.listings);
  // }

  // componentDidMount() {
  //   SearchPageStore.addChangeListener(this.resultsFounds.bind(this));
  // }
  //
  // componentWillUnmount() {
  //   SearchPageStore.removeChangeListener(this.resultsFounds.bind(this));
  // }

  // onSearchPressed() {
  //   if (this.state.isLoading == false) {
  //     this.setState({isLoading: true});
  //     SearchPageAction.searchResultsForLocation(this.state.searchString);
  //   }
  // }
  //
  // onLocationPressed() {
  //   if (this.state.isLoading == false) {
  //     this.setState({isLoading: true});
  //     SearchPageAction.searchResultsForCurrentLocation();
  //   }
  // }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    return (
      <div id="container">
        <span className="description">Search for houses to buy!</span>
        <span className="description">Search by place-name, postcode or search near your location.</span>
        <div id="flowRight">
          <input type="text" className="searchInput" placeholder="Search via name or postcode"
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)} />
          <button className="button" underlayColor='#99d9f4'>
            <Link className="buttonText" to={`/property_search/${this.state.searchString}`}>Go</Link>
          </button>
        </div>
        <button className="button" underlayColor='#99d9f4'>
          <Link className="buttonText" to={`/property_search/current_location`}>Location</Link>
        </button>
        <img src="Resources/Images/house.png" id="#image" />
      </div>
    );
  }
}

module.exports = SearchPageComponent;
