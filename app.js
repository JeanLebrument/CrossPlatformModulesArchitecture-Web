/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import History from 'react-router/lib/HashHistory';

import SearchPageComponent from './Modules/SearchPage/Component/SearchPageComponent'
import PropertyViewComponent from './Modules/PropertyView/Component/PropertyViewComponent'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Property Finder</h1>
        <Link to="/property_search">Search</Link>
        {this.props.children}
      </div>
    )
  }
}

React.render((
    <Router history={new History}>
      <Route path="/" component={App}>
        <Route path="property_search" component={SearchPageComponent}>
          <Route path=":location" component={SearchPageComponent} />
        </Route>
        <Route path="property_view/:propertyId" component={PropertyViewComponent} />
        <Route path="*" component={App}/>
      </Route>
    </Router>
  ),
  document.getElementById('PropertyFinder')
);
