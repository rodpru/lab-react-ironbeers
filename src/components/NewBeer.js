import React from 'react';
import Beers from '../utils/Api';

class NewBeer extends React.Component {
  state = {
    name: '',
    tag_line: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const newBeer = new Beers();
    newBeer.addBeer(this.state).then(() => {
      this.props.history.push('/beers');
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label>Tag Line</label>
        <input
          type="text"
          name="tag_line"
          onChange={this.handleChange}
          value={this.state.tag_line}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />
        <label>Brewer Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={this.handleChange}
          value={this.state.brewers_tips}
        />
        <label>Attenuation Level</label>
        <input
          type="text"
          name="attenuation_level"
          onChange={this.handleChange}
          value={this.state.attenuation_level}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={this.handleChange}
          value={this.state.contributed_by}
        />
        <button>Create</button>
      </form>
    );
  }
}

export default NewBeer;
