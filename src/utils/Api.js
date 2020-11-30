import axios from 'axios';

class Beers {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API}`,
    });
    this.service = service;
  }

  getAll() {
    //axios.get('http://localhost:5000/charac...')
    return this.service.get('/');
  }

  getOne(id) {
    return this.service.get(`/${id}`);
  }
  getRandom() {
    return this.service.get('/random');
  }

  getQuery() {
    return this.service.get('/search?q=');
  }

  addBeer(beer) {
    //axios.post('http://..../, {object})
    return this.service.post('/new', beer);
  }
}

export default Beers;
