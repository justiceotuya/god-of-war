import React from 'react';
import { ButtonInstruction } from './ButtonInstruction';
import { Menu } from './Menu';
import { StyledGameScene } from './style/GameScene.style';

const select_menu = [
    {
        title: 'INVENTORY',
        screen: 'NEW_GAME_SCREEN',
    },
    {
        title: 'SETTINGS',
        screen: 'SETTINGS_SCREEN',
    },
    {
        title: 'ACCESSIBILITY',
        screen: 'NEW_GAME_SCREEN',
    },
    {
        title: 'QUIT',
        screen: 'SETTINGS_SCREEN',
    },
];

export const GameScene = () => {
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsPaused(true);
        }, 2000);
    }, []);
    return (
        <StyledGameScene isPaused={isPaused}>
            <div className="pause__container"></div>
            <div className="content__container">
                <div className="menu__container">
                    <Menu settings={select_menu} />
                    <div className="button__container">
                        <ButtonInstruction canGoBack /> 
                    </div>
                </div>
            </div>
        </StyledGameScene>
    );
};
