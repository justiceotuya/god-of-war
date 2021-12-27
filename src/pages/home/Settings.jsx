import React, { useState } from 'react';
import { StyledSettings } from './style/Settings.style';
import { HomeLayout } from './HomeLayout';
import { Menu } from './Menu';
import { ButtonInstruction } from './ButtonInstruction';

const select_menu = [
    {
        title: 'GIVE ME A STORY',
        screen: 'GameSceneScreen',
        subtitle: `“Give Me  A Story” is for players who just want to enjoy the games story.`,
    },
    {
        title: 'GIVE ME BALANCE',
        screen: 'GameSceneScreen',
        subtitle: `“Give Me  Balance” combines adventure and storytelling.`,
    },
    {
        title: 'GIVE ME CHAOS',
        screen: 'GameSceneScreen',
        subtitle: `“Give Me  Chaos” gives adrenaline pumping action.`,
    },
    {
        title: 'I AM THE GOD OF WAR',
        screen: 'GameSceneScreen',
        subtitle: `Step up to the challenge. Prove your title.`,
    },
];
export const Settings = ({ handleMoveToPage }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);

    const getSelectedMenu = (selected) => {
        setSelectedMenu(selected);
    };

    return (
        <HomeLayout>
            <StyledSettings>
                <h1 className="select__title">SELECT DIFFICULTY</h1>

                <Menu
                    settings={select_menu}
                    handleGetSelectedMenu={getSelectedMenu}
                    backScreen="NewGameScreen"
                    handleMoveToPage={handleMoveToPage}
                />

                <p className="menu__subtitle">{select_menu[selectedMenu].subtitle}</p>

                <div className="button__container">
                    <ButtonInstruction canGoBack={true} />
                </div>
            </StyledSettings>
        </HomeLayout>
    );
};
