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

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.onSubmit(title, body);
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange} />
        <input type="text" name="body" value={body} onChange={this.handleChange} />
        <button>Create</button>
      </form>
    );
  }
}
