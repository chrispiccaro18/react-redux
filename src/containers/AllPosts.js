import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import Posts from '../components/Posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(
  mapStateToProps
)(Posts);
