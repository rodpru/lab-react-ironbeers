import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello from the Home page</h3>
        <ul>
          <li>
            <Link to={'/beers'}>Beers</Link>
          </li>
          <li>
            <Link to={'/random-beer'}>Random Beer</Link>
          </li>
          <li>
          <Link to={'/new-beer'}>New Beer</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
