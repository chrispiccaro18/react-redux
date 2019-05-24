import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.props.match.params.id, this.state.body);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
        <button>Comment</button>
      </form>
    );
  }
}
