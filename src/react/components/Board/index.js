import { connect } from 'react-redux';
import { startGame } from '../../redux/actions';
import Board from './component';

const mapStateToProps = () => (
    {
        // TODO: Remvoe mock data, bind to store
        rows: [
            ['A', 'B', 'C', 'D'],
            ['E', 'F', 'G', 'H'],
            ['I', 'J', 'K', 'L'],
            ['M', 'N', 'O', 'P']
        ]
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        startGame: () => {
            dispatch(startGame());
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);