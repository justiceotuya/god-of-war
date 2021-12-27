import React, { useState, useEffect } from 'react';
import {
    StyledInventoryScreenHeaderNavigation,
    StyledInventoryItem,
} from './style/InventoryScreenHeaderNavigation.style';
import { ReactComponent as XpPointIcon } from '../../assets/xp_monitor.svg';
import { ReactComponent as ScoreIcon } from '../../assets/score-monitor.svg';
import { ReactComponent as R1Button } from '../../assets/r1-button.svg';
import { ReactComponent as L1Button } from '../../assets/l1-button.svg';

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

export const InventoryScreenHeaderNavigation = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);

    // listen to key press and set selected menu
    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);
        const button = document.getElementsByTagName('button');
        //move focus to the button
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
        <StyledInventoryScreenHeaderNavigation>
            <div className="inventory__menu__container">
                <div className="control__container">
                    <div className="button__control" onClick={(e) => onKeyDown(e, 'left')}>
                        <L1Button />
                    </div>
                    <ul className="inventory__menu">
                        {inventoryMenu.map((item, index) => {
                            const { text } = item;
                            return (
                                <StyledInventoryItem
                                    className="inventory__menu__item"
                                    key={text}
                                    selected={selectedMenu === index}
                                >
                                    <button
                                        className="navigation__item"
                                        onClick={() => handleSelectMenu(index)}
                                        onFocus={() => handleSelectMenu(index)}
                                    >
                                        {text}
                                    </button>
                                </StyledInventoryItem>
                            );
                        })}
                    </ul>
                    <div className="button__control" onClick={(e) => onKeyDown(e, 'right')}>
                        <R1Button />
                    </div>
                </div>
                <div className="game__score">
                    <div className="xp_monitor">
                        <XpPointIcon />
                        <p className="monitor__point">413</p>
                    </div>
                    <div className="score_monitor">
                        <ScoreIcon />
                        <p className="monitor__point">900</p>
                    </div>
                </div>
            </div>
        </StyledInventoryScreenHeaderNavigation>
    );
};
