import React, { useState, useRef, useEffect } from 'react';
import { StyledInventoryScreen } from './style/InventoryScreen.style';
import { ReactComponent as XpPointIcon } from '../../assets/xp_monitor.svg';
import { ReactComponent as ScoreIcon } from '../../assets/score-monitor.svg';
import { ReactComponent as R1Button } from '../../assets/r1-button.svg';
import { ReactComponent as L1Button } from '../../assets/l1-button.svg';
import { InventoryScreenHeaderNavigation } from './InventoryScreenHeaderNavigation';
import { InventoryScreenArmourSelect } from './InventoryScreenArmourSelect';

const inventoryMenu = [
    {
        text: 'ARMOUR',
    },
    {
        text: 'WEAPONS',
    },
    {
        text: 'SKILLS',
    },
    {
        text: 'MAP',
    },
    {
        text: 'GOALS',
    },
    {
        text: 'RESOURCES',
    },
    {
        text: 'CODEX',
    },
];

export const InventoryScreen = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);

    const buttonRef = useRef(null);

    // listen to key press and set selected menu
    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);
        const button = document.getElementsByTagName('button');
        //move focus to the button
        console.log(selectedMenu);
        button[selectedMenu].focus();
        return () => {
            document.body.removeEventListener('keydown', onKeyDown);
        };
    }, [selectedMenu]);

    const onKeyDown = (e, key) => {
        const button = document.getElementsByTagName('button');
        //prevent focus on browser

        if (e.key === 'ArrowLeft' || key === 'left') {
            selectedMenu === 0
                ? setSelectedMenu(inventoryMenu.length - 1)
                : setSelectedMenu((position) => position - 1);
        } else if (e.key === 'ArrowRight' || key === 'right') {
            selectedMenu === inventoryMenu.length - 1
                ? setSelectedMenu(0)
                : setSelectedMenu((position) => position + 1);
        } else if (selectedMenu === inventoryMenu.length - 1) {
            button[0].focus();
        }
    };

    // if menu is selected, use that menu else toggle the menu
    const handleSelectMenu = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <StyledInventoryScreen>
            <InventoryScreenHeaderNavigation />
            <InventoryScreenArmourSelect />
        </StyledInventoryScreen>
    );
};
