import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from '../../components/comments/CommentForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(postIndex, body) {
    dispatch(createComment(postIndex, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
