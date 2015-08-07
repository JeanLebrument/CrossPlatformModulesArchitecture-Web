"use strict";

import { Router, Route, Link } from 'react-router';
import React from 'react';
import SearchResultOutput from '../Output/SearchResultOutput';

// var styles = StyleSheet.create({
//   thumb: {
//     width: 80,
//     height: 80,
//     marginRight: 10
//   },
//   textContainer: {
//     flex: 1
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#dddddd'
//   },
//   price: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#48BBEC'
//   },
//   title: {
//     fontSize: 20,
//     color: '#656565'
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     padding: 10
//   }
// });

class ListItemWrapper extends React.Component {
  rowPressed(propertyGuid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
    SearchResultOutput.goToNextModule(this, property);
  }

  render() {
    var price = this.props.result.price_formatted.split(' ')[0];
    return (
      <li>
        <Link to={`property_view/${this.props.result.guid}`} query={this.props.result} >
          <div>
            <div id="rowContainer">
              <img id="thumb" src={this.props.result.img_url}/>

              <div id="textContainer">
                <span className="price">£{price}</span>
                <span className="title">{this.props.result.title}</span>
              </div>
            </div>
            <div id="separator"/>
          </div>
        </Link>
      </li>
    );
  }
}

class SearchResultsComponent extends React.Component {

  render() {

    if (this.props.listings != undefined) {
      var listingsHTML = [];
      var map = function (array, callback) {
        for (var linsting of array) {
          listingsHTML.push(callback(linsting));
        }
        return listingsHTML;
      };

      return (
        <ul>
          {map(this.props.listings.listings, function (result) {
            return <ListItemWrapper key={result.guid} result={result}/>;
          })}
        </ul>
      );
    } else {
      return <div/>
    }
  }
}


module.exports = SearchResultsComponent;
