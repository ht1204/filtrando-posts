import React, { Component } from 'react';
import posts from './posts'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
    }

    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  handleInputSearch(event) {
    this.setState({
      inputSearch: event.target.value,
    });
  }

  filterPosts() {

    if(this.state.inputSearch.trim() === "")
      return posts;

    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(this.state.inputSearch.toLowerCase());
    });

    return filteredPosts;

  }


  render() {

    const searchedPosts = this.filterPosts();

    return (
      <div>
        <div className="filter">
          <input
            type="text"
            placeholder="Ingresa el término de búsqueda"
            value={this.state.inputSearch}
            onChange={this.handleInputSearch}
          />
        </div>
        <ul>
          {searchedPosts.map((post, index) => {
            return (
              <li key={index}>
                <a href={post.url} target='_blank'>
                  <img src={post.image} alt={post.title} />
                </a>
                <p>{post.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default App


