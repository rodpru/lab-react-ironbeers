import React from 'react';
import Beers from '../utils/Api';

class RandomBeer extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };
  componentDidMount() {
    let randomBeer = new Beers();
    randomBeer.getRandom().then((response) => {
      this.setState({
        name: response.data.name,
        tagline: response.data.tagline,
        first_brewed: response.data.first_brewed,
        attenuation_level: response.data.attenuation_level,
        description: response.data.description,
        contributed_by: response.data.contributed_by,
        image: response.data.image_url,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Name:{this.state.name}</h2>
        <p>Tag Line:{this.state.tagline}</p>
        <p>First Brewed:{this.state.first_brewed}</p>
        <p>Att Level:{this.state.attenuation_level}</p>
        <p>Description:{this.state.description}</p>
        <p>Contributed:{this.state.contributed_by}</p>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default RandomBeer;
