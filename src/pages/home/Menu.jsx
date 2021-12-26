import React, { useState, useEffect, useRef } from 'react';
import { StyledSelectItem, StyledMenu } from './style/Menu.style';

export const Menu = ({ settings, handleGetSelectedMenu }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const buttonRef = useRef(null);
    // listen to key press and set selected menu
    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);
        const button = document.getElementsByTagName('button');
        //move focus to the button
        button[selectedMenu].focus();
        handleGetSelectedMenu && handleGetSelectedMenu(selectedMenu);
        return () => {
            document.body.removeEventListener('keydown', onKeyDown);
        };
    }, [selectedMenu]);

    const onKeyDown = (e) => {
        const button = document.getElementsByTagName('button');
        //prevent focus on browser

        if (e.key === 'ArrowUp') {
            selectedMenu === 0 ? setSelectedMenu(settings.length - 1) : setSelectedMenu((position) => position - 1);
        } else if (e.key === 'ArrowDown') {
            selectedMenu === settings.length - 1 ? setSelectedMenu(0) : setSelectedMenu((position) => position + 1);
        } else if (selectedMenu === settings.length - 1) {
            button[0].focus();
        }
    };

    // if menu is selected, use that menu else toggle the menu
    const handleSelectMenu = (menu) => {
        setSelectedMenu(menu);
    };
    return (
        <StyledMenu ref={buttonRef}>
            {settings.map((item, index) => {
                const { title, screen } = item;
                return (
                    <StyledSelectItem
                        key={title}
                        className="select_item"
                        selectedMenu={settings[selectedMenu].title}
                        title={title}
                    >
                        <button
                            type="button"
                            onClick={() => handleSelectMenu(index)}
                            onFocus={() => handleSelectMenu(index)}
                        >
                            {title}
                        </button>
                    </StyledSelectItem>
                );
            })}
        </StyledMenu>
    );
};
