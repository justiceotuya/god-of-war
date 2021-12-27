import React, { useState } from 'react';
import { NewGameScreen } from './NewGameScreen';
import { Settings } from './Settings';
import { LoadingScreen } from './LoadingScreen';
import { GameScene } from './GameScene';
import { InventoryScreen } from './InventoryScreen';

export const Home = () => {
    const [currentScreen, setCurrentScreen] = useState('NewGameScreen');

    const handleMoveToPage = (screen) => {
        setCurrentScreen(screen);
    };
    return (
        <>
            {currentScreen === 'NewGameScreen' && <NewGameScreen handleMoveToPage={handleMoveToPage} />}

            {currentScreen === 'SettingsScreen' && <Settings handleMoveToPage={handleMoveToPage} />}

            {currentScreen === 'LoadingScreen' && <LoadingScreen handleMoveToPage={handleMoveToPage} />}

            {currentScreen === 'GameSceneScreen' && <GameScene handleMoveToPage={handleMoveToPage} />}

            {currentScreen === 'InventoryScreen' && <InventoryScreen handleMoveToPage={handleMoveToPage} />}
        </>
    );
};
