import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from '../Cell';

const RowWrapper = styled(View)`
    flex-direction: row;
`;

const Row = ({ letters }) => {
    const letterComponents = letters.map((letter, index) => {
        const letterKey = `letter-${index}`;

        return <Cell letter={letter} key={letterKey} />;
    });

    return (
        <RowWrapper>
            {letterComponents}
        </RowWrapper>
    );
};

Row.defaultProps = {
    letters: []
};

Row.propTypes = {
    letters: PropTypes.arrayOf(
        PropTypes.string
    )
};

export default Row;