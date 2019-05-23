import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PostForm from '../components/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
