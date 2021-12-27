import React from 'react';
import logo from './logo.svg';
import Home from './pages/home';
import { Settings } from './pages/home/Settings';
import { LoadingScreen } from './pages/home/LoadingScreen';
import { GameScene } from './pages/home/GameScene';
import { InventoryScreen } from './pages/home/InventoryScreen';

function App() {
    return <GameScene />;
}

export default App;
