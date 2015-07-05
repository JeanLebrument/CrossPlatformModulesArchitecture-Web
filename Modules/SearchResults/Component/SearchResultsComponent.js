"use strict";

var React = require('react');
var SearchResultOutput = require('../Output/SearchResultOutput');

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

class SearchResultsComponent extends React.Component {

  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});

    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  rowPressed(propertyGuid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    SearchResultOutput.goToNextModule(this, property);
  }

  render() {
    var price = rowData.price_formatted.split(' ')[0];
    var listingsHTML = [];

    for (var linsting in this.props.listings) {
      listingsHTML.push(
        <button onPress={() => this.rowPressed(linsting.guid)} underlayColor='#dddddd'>
          <div>
            <div id="rowContainer">
              <img id="thumb" src={{ uri: linsting.img_url }} />
              <div id="textContainer">
                <span class="price">£{price}</span>
                <span class="title">{linsting.title}</span>
              </div>
            </div>
            <div id="separator" />
          </div>
        </button>
      );
    }
    return (
      <div>{listingsHTML}</div>
    );
  }
}


module.exports = SearchResultsComponent;
