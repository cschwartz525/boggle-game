import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';

import Main from './components/Main';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default function HybridApp() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Main />
            </View>
        </Provider>
    );
}