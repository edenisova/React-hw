import { connect } from 'react-redux';
import NewsItem from './components/NewsItem/NewsItem'

const mapStateToProps = (state, props) => ({
    likes: state['likes_'+props.id]
});

export default connect(mapStateToProps)(NewsItem);