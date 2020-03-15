import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../Row';

// TODO: Make linear gradient work
// background: linear-gradient(#446688, #002244);
const BoardWrapper = styled(View)`
    background: #002244;
    border: 2px solid black;
    border-radius: 10px;
    margin: 0 auto;
`;

const Board = ({ rows }) => {
    const rowComponents = rows.map((row, index) => {
        const rowKey = `row-${index}`;

        return <Row letters={row} key={rowKey} />;
    });

    return (
        <BoardWrapper>
            {rowComponents}
        </BoardWrapper>
    );
};

Board.defaultProps = {
    rows: [[]]
};

Board.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    )
};

export default Board;