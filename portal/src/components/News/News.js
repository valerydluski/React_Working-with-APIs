import React, { Component } from 'react';
import NewSingle from './NewSingle';

export default class News extends Component {
  renderItems() {
    return this.props.items.map((item) => (
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
