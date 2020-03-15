import { registerRootComponent } from 'expo';
import React from 'react';
import MobileApp from './react/App';

function App() {
    return (
        <MobileApp />
    );
}

export default registerRootComponent(App);