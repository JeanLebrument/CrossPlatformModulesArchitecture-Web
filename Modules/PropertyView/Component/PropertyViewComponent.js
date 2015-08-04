'use strict';

import React from 'react';

class PropertyViewComponent extends React.Component {

  render(props) {

    var property = this.props.location.query;
    var stats = property.bedroom_number + ' bed ' + property.property_type;

    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
          ? 'bathrooms' : 'bathroom');
    }

    var price = property.price_formatted.split(' ')[0];

    return (
      <div id="container">
        <img id="image" src={property.img_url}/>

        <div id="heading">
          <span className="price">£{price}</span>
          <span className="title">{property.title}</span>
          <span className="separator"/>
        </div>
        <span className="description">{stats}</span>
        <span className="description">{property.summary}</span>
      </div>
    );
  }
}

module.exports = PropertyViewComponent;
