import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.props.onSubmit(title, body)}>
        <input type="text" name="title" value={title} onChange={this.handleChange} />
        <input type="text" name="body" value={body} onChange={this.handleChange} />
        <button>Create</button>
      </form>
    );
  }
}
