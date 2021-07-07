import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from '../../components/comments/CommentForm';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(body) {
    dispatch(createComment(props.id, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
