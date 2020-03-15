import Status from './status';

const Actions = {
    START_GAME: 'START_GAME'
};

const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

/* eslint-disable import/prefer-default-export */
export function startGame() {
    return (dispatch) => {
        dispatch({
            type: Actions.START_GAME,
            status: Status.PENDING
        });

        const board = [];

        for (let i = 0; i < 4; i++) {
            board[i] = [];
            for (let j = 0; j < 4; j++) {
                const charIndex = Math.floor(Math.random() * characters.length);

                board[i][j] = characters[charIndex];
            }
        }

        dispatch({
            type: Actions.START_GAME,
            status: Status.SUCCESS,
            payload: {
                board
            }
        });
    };
}
/* eslint-enable import/prefer-default-export */