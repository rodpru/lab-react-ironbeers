import React from 'react';
import Beers from '../utils/Api';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    allBeers: [],
  };
  componentDidMount() {
    let beers = new Beers();
    beers.getAll().then((response) => {
      this.setState({
        allBeers: response.data,
      });
      console.log(this.state.allBeers);
    });
  }

  render() {
    return (
      <div>
        {this.state.allBeers.map((beer, index) => {
          return (
            <div key={index}>
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
