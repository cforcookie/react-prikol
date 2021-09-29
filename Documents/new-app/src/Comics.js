import React from 'react';

import axios from 'axios';

export default class Comics extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://gateway.marvel.com/v1/public/comics/77816?ts=1&apikey=05bdff2e4d6c81bb3025ffd307dd7000&hash=61bfb486e126d4d6753a6db558ed54d7`)
      .then(res => {
        const persons = res.data.data.results;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.title}</li>)}
      </ul>
    )
  }
}