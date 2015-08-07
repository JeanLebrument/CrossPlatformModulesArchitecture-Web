
import React from 'react';
import { Router, Route, Link } from 'react-router';

import SearchPageComponent from 'Modules/SearchPage/Component/SearchPageComponent'
import PropertyViewComponent from 'Modules/PropertyView/Component/PropertyViewComponent'

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

export default (
<Route path="/" component={App}>
  <Route path="property_search" component={SearchPageComponent}>
    <Route path=":location" component={SearchPageComponent} />
  </Route>
  <Route path="property_view/:propertyId" component={PropertyViewComponent} />
  <Route path="*" component={App}/>
</Route>
);