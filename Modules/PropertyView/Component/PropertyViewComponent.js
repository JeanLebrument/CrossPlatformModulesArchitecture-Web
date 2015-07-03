'use strict';

var React = require('react');

class PropertyViewComponent extends React.Component {

  render() {
    var property = this.props.property;
    var stats = property.bedroom_number + ' bed ' + property.property_type;

    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
        ? 'bathrooms' : 'bathroom');
    }

    var price = property.price_formatted.split(' ')[0];

    return (
      <div id="container">
        <img id="image" source={{uri: property.img_url}} />
        <div id="heading">
          <span class="price">£{price}</span>
          <span class="title">{property.title}</span>
          <span class="separator"/>
        </div>
        <span class="description">{stats}</span>
        <span class="description">{property.summary}</span>
      </div>
    );
  }
};

module.exports = PropertyViewComponent;
