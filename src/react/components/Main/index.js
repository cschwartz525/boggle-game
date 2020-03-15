import { connect } from 'react-redux';
import { startGame } from '../../redux/actions';
import Main from './component';

const mapStateToProps = () => (
    // TODO: Fill this in
    {}
);

const mapDispatchToProps = (dispatch) => (
    {
        startGame: () => {
            dispatch(startGame());
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);