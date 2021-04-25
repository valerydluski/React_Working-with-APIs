import axios from 'axios';
import React, { Component } from 'react';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=e2497413ff0b4b4db1cef731a0591bfc`;

    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      })
  }

  renderItems() {
    if(!this.state.error) {
      return this.state.sidenews?.map((item) => (
        <SingleSide key={item.url} item={item} />
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default SideNews;
