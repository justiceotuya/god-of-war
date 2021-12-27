import React, { useState, useEffect, useRef } from 'react';
import { StyledSettings } from './style/Settings.style';

import { ReactComponent as CrossButton } from '../../assets/cross-button.svg';
import { ReactComponent as CircleButton } from '../../assets/circle-button.svg';
import { HomeLayout } from './HomeLayout';
import { Menu } from './Menu';
import { ButtonInstruction } from './ButtonInstruction';

const select_menu = [
    {
        title: 'GIVE ME A STORY',
        screen: 'NEW_GAME_SCREEN',
        subtitle: `“Give Me  A Story” is for players who just want to enjoy the games story.`,
    },
    {
        title: 'GIVE ME BALANCE',
        screen: 'SETTINGS_SCREEN',
        subtitle: `“Give Me  Balance” combines adventure and storytelling.`,
    },
    {
        title: 'GIVE ME CHAOS',
        screen: 'NEW_GAME_SCREEN',
        subtitle: `“Give Me  Chaos” gives adrenaline pumping action.`,
    },
    {
        title: 'I AM THE GOD OF WAR',
        screen: 'SETTINGS_SCREEN',
        subtitle: `Step up to the challenge. Prove your title.`,
    },
];
export const Settings = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);

    const getSelectedMenu = (selected) => {
        setSelectedMenu(selected);
    };

    return (
        <HomeLayout>
            <StyledSettings>
                <h1 className="select__title">SELECT DIFFICULTY</h1>

                <Menu settings={select_menu} handleGetSelectedMenu={getSelectedMenu} />

                <p className="menu__subtitle">{select_menu[selectedMenu].subtitle}</p>

                <div className="button__container">
                    <ButtonInstruction canGoBack={true} />
                </div>
            </StyledSettings>
        </HomeLayout>
    );
};
