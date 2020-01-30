import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullname: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => this.setState({fullname: users}));
  }

  render() {
    const { fullname, searchField } = this.state;
    const filteredNames = fullname.filter(fullname =>
        fullname.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1>List of Names</h1>
      <SearchBox 
        placeholder = 'search monsters'
        handleChange = {e => this.setState({searchField: e.target.value})}
      />
      <CardList names = {filteredNames} />
      
    </div>
    );
  }
}

export default App;