import { connect } from 'react-redux';
import { startGame } from '../../redux/actions';
import Board from './component';

const mapStateToProps = (state) => ({
    rows: state.game.board
});

const mapDispatchToProps = (dispatch) => ({
    startGame: () => {
        dispatch(startGame());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);