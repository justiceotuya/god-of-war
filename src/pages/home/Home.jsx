import React, { useState, useEffect } from 'react';
import { StyledHome } from './style/Home.style';
import { ReactComponent as CrossButton } from '../../assets/cross-button.svg';
import { HomeLayout } from './HomeLayout';
import { Menu } from './Menu';
import { ButtonInstruction } from './ButtonInstruction';

const select_menu = [
    {
        title: 'new game',
        screen: 'NEW_GAME_SCREEN',
    },
    {
        title: 'settings',
        screen: 'SETTINGS_SCREEN',
    },
];
export const Home = () => {
    return (
        <HomeLayout>
            <StyledHome>
                <Menu settings={select_menu} />
                <div className="select__instruction">
                    <ButtonInstruction />
                </div>
            </StyledHome>
        </HomeLayout>
    );
};
