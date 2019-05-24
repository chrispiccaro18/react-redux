import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelectors';
import Comments from '../../components/comments/Comments';

const mapStateToProps = (state, props) => {
  return {
    comments: getComments(state, props.id)
  };
};

export default connect(
  mapStateToProps
)(Comments);
