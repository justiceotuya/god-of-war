import React from 'react';
import { StyledNewGameScreen } from './style/NewGameScreen.style';
import { HomeLayout } from './HomeLayout';
import { Menu } from './Menu';
import { ButtonInstruction } from './ButtonInstruction';

const select_menu = [
    {
        title: 'new game',
        screen: 'SettingsScreen',
    },
    {
        title: 'settings',
    },
];
export const NewGameScreen = ({ handleMoveToPage }) => {
    return (
        <HomeLayout>
            <StyledNewGameScreen>
                <Menu settings={select_menu} handleMoveToPage={handleMoveToPage} />
                <div className="select__instruction">
                    <ButtonInstruction />
                </div>
            </StyledNewGameScreen>
        </HomeLayout>
    );
};
