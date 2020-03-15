import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Board from '../Board';

const Header = styled(Text)`
    font-size: 32px;
    margin-bottom: 10px;
    text-align: center;
`;

const Main = ({ startGame }) => {
    useEffect(() => startGame(), []);

    return (
        <View>
            <Header>Boggle</Header>
            <Board />
        </View>
    );
};

Main.propTypes = {
    startGame: PropTypes.func.isRequired
};

export default Main;