import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Board from '../Board';

const Main = ({ startGame }) => {
    useEffect(() => startGame(), []);

    return (
        <View>
            <Text>Boggle</Text>
            <Board />
        </View>
    );
};

Main.propTypes = {
    startGame: PropTypes.func.isRequired
};

export default Main;