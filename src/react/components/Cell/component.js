import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: Make linear gradient work
// background: linear-gradient(#ccddee, #5599dd);
const CellWrapper = styled(View)`
    align-items: center;
    background: #5599dd;
    border: 1px solid black;
    border-radius: 5px;
    height: 80px;
    justify-content: center;
    line-height: 2;
    margin: 5px;
    width: 80px;

    &:hover {
        background: #ccddee;
    }
`;

const Letter = styled(Text)`
    color: #fff;
    font-family: Helvetica;
    font-size: 40px;
    margin: 10px;
    text-align: center;
`;

const Cell = ({ letter }) => (
    <CellWrapper>
        <Letter>{letter}</Letter>
    </CellWrapper>
);

Cell.defaultProps = {
    letter: ''
};

Cell.propTypes = {
    letter: PropTypes.string
};


export default Cell;