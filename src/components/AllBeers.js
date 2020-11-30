import React from 'react';
import Beers from '../utils/Api';
import queryString from 'query-string';

import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    allBeers: [],
  };
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log('values from query', values);
    let beers = new Beers();
    beers.getQuery(values).then((response) => {
      console.log(response, 'response from query');
    });
    beers.getAll().then((response) => {
      this.setState({
        allBeers: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.allBeers.map((beer, index) => {
          return (
            <div key={index}>
              <form>
                <label>Search</label>
                <input type="text" name="query" />
                <button>Search</button>
              </form>
              <img src={beer.image_url} />
              <h3>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </h3>
              <p>{beer.tagline}</p>
              <p>Contributed By: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
