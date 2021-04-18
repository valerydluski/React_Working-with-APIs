import React, { Component } from 'react';
import NewSingle from './NewSingle';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state= {
      news: [],
    }
  }

  componentDidMount() {
    const url ='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e2497413ff0b4b4db1cef731a0591bfc';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.id} item={item} />
    ))
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    )
  }
}
