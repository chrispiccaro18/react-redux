import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelectors';
import Comments from '../../components/comments/Comments';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(Comments);
