import React from 'react';
import { ButtonInstruction } from './ButtonInstruction';
import { Menu } from './Menu';
import { StyledGameScene } from './style/GameScene.style';

const select_menu = [
    {
        title: 'INVENTORY',
        screen: 'InventoryScreen',
    },
    {
        title: 'SETTINGS',
    },
    {
        title: 'ACCESSIBILITY',
    },
    {
        title: 'QUIT',
        screen: 'NewGameScreen',
    },
];

export const GameScene = ({ handleMoveToPage }) => {
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsPaused(true);
        }, 1000);
    }, []);

    return (
        <StyledGameScene isPaused={isPaused}>
            <div className="pause__container"></div>
            <div className="content__container">
                <div className="menu__container">
                    <Menu settings={select_menu} handleMoveToPage={handleMoveToPage} backScreen="SettingsScreen" />
                    <div className="button__container">
                        <ButtonInstruction canGoBack /> 
                    </div>
                </div>
            </div>
        </StyledGameScene>
    );
};
