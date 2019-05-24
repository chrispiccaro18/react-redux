import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelectors';
import Comments from '../../components/comments/Comments';
import { deleteComment } from '../../actions/commentActions';

const mapStateToProps = (state, props) => {
  return {
    comments: getComments(state, props.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  deleteComment(id) {
    dispatch(deleteComment(props.id, id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
