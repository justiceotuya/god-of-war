import React, { useState, useRef, useEffect } from 'react';
import {
    StyledInventoryScreenArmourSelect,
    StyledInventoryArmourItem,
} from './style/InventoryScreenArmourSelect.style';
import { ReactComponent as ArmGuard } from '../../assets/arm_guard.svg';
import { ReactComponent as Gardle } from '../../assets/gardle.svg';
import { ReactComponent as LegArmour } from '../../assets/leg_armour.svg';
import { ReactComponent as ShoulderGuard } from '../../assets/shoulder_guard.svg';
import { ReactComponent as Pteruges } from '../../assets/pteruges.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

const selectedInventory = [
    {
        armour: <ShoulderGuard />,
        itemType: 'COMMON ITEM',
        itemName: 'SHOULDER GUARD OF EXILE',
        itemDescription:
            'Built from the shed skin of mystical dragons, the guard of exile promises unlimited protection',
        itemLevel: '6',
        itemStrengthDetails: {
            defense: 90,
            offense: 21,
            mobility: 100,
            luck: 12,
        },
    },
    {
        armour: <Gardle />,
        itemType: 'COMMON ITEM',
        itemName: 'GARDLE OF HADES',
        itemDescription: 'Utility made for the gods, summon your weapons with a swipe',
        itemLevel: '3',
        itemStrengthDetails: {
            defense: 10,
            offense: 2,
            mobility: 100,
            luck: 12,
        },
    },
    {
        armour: <ArmGuard />,
        itemType: 'COMMON ITEM',
        itemName: 'ARM GUARD OF BALDUR',
        itemDescription: 'A metallic guard that can be used for both offense and defense',
        itemLevel: '1',
        itemStrengthDetails: {
            defense: 80,
            offense: 82,
            mobility: 100,
            luck: 12,
        },
    },
    {
        armour: <Pteruges />,
        itemType: 'COMMON ITEM',
        itemName: 'PTERUGES OF GAIA',
        itemDescription: 'Royal pterugesto protect Kratos from the harsh Norse winds',
        itemLevel: '1',
        itemStrengthDetails: {
            defense: 0,
            offense: 0,
            mobility: 100,
            luck: 12,
        },
    },
    {
        armour: <LegArmour />,
        itemType: 'COMMON ITEM',
        itemName: 'LEG ARMOUR OF HELIOS',
        itemDescription: 'Golden and powerful like its former weilder, it protects Kratos from the harsh terrains',
        itemLevel: '9',
        itemStrengthDetails: {
            defense: 0,
            offense: 0,
            mobility: 100,
            luck: 12,
        },
    },
];

export const InventoryScreenArmourSelect = ({ handleMoveToPage }) => {
    const [selectedArmour, setSelectedArmour] = useState(0);
    const [menuPosition, setMenuPosition] = useState({
        top: '0px',
        bottom: 'unset',
    });
    const [isPreviewHidden, setIsPreviewHidden] = useState(true);

    const buttonRef = useRef(null);
    const menuPreviewRef = useRef(null);

    // listen to key press and set selected menu
    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);
        if (selectedArmour === 0) {
            buttonRef.current.scrollTop = 0;
        }
        if (selectedArmour === selectedInventory.length - 1) {
            buttonRef.current.scrollTop = buttonRef.current.scrollHeight;
        }
        return () => {
            document.body.removeEventListener('keydown', onKeyDown);
        };
    }, [selectedArmour]);

    useEffect(() => {
        //calculate position of the menu
        let containerPosition = buttonRef.current.getBoundingClientRect();
        let elementPosition = buttonRef.current.children[selectedArmour].getBoundingClientRect();
        let menuPreviewPosition = menuPreviewRef && menuPreviewRef.current.getBoundingClientRect();
        let documentPosition = window.innerHeight;

        if (elementPosition.top + menuPreviewPosition.height > documentPosition) {
            setMenuPosition({ top: 'unset', bottom: '53px' });
        } else {
            setMenuPosition({ top: `${elementPosition.y - containerPosition.y}px`, bottom: 'unset' });
        }
    }, [selectedArmour, window]);

    useEffect(() => {
        openPreview();
        window.addEventListener('resize', openPreview);

        return () => {
            window.removeEventListener('keydown', openPreview);
        };
    }, [isPreviewHidden]);

    const openPreview = () => {
        if (window.innerWidth > 599) {
            setIsPreviewHidden(false);
        }
    };

    const closePreviewBox = () => {
        setIsPreviewHidden(true);
    };

    const onKeyDown = (e, key) => {
        setIsPreviewHidden(false);
        if (e.key === 'ArrowUp') {
            selectedArmour === 0
                ? setSelectedArmour(selectedInventory.length - 1)
                : setSelectedArmour((position) => position - 1);
        } else if (e.key === 'ArrowDown') {
            selectedArmour === selectedInventory.length - 1
                ? setSelectedArmour(0)
                : setSelectedArmour((position) => position + 1);
        } else if (e.key === 'Escape' || e.key === 'o') {
            handleMoveToPage('GameSceneScreen');
        }
    };

    // if menu is selected, use that menu else toggle the menu
    const handleSelectMenu = (menu) => {
        setIsPreviewHidden(false);
        setSelectedArmour(menu);
    };

    return (
        <StyledInventoryScreenArmourSelect menuPosition={menuPosition} isPreviewHidden={isPreviewHidden}>
            <ul className="armour__menu" ref={buttonRef}>
                {selectedInventory.map((item, index) => {
                    const { armour } = item;
                    return (
                        <StyledInventoryArmourItem
                            className="armour__menu__item"
                            key={JSON.stringify(armour + index)}
                            selected={selectedArmour === index}
                            onClick={() => handleSelectMenu(index)}
                            onFocus={() => handleSelectMenu(index)}
                        >
                            <button className="armour__navigation__item">{armour}</button>
                        </StyledInventoryArmourItem>
                    );
                })}
            </ul>
            <div className="item__preview" ref={menuPreviewRef}>
                <p className="item__rarity">
                    {selectedInventory[selectedArmour].itemType}
                    <button className="close__button" onClick={closePreviewBox}>
                        <CloseIcon />
                    </button>
                </p>

                <div className="item__description">
                    <p className="item__name">{selectedInventory[selectedArmour].itemName}</p>
                    <div className="item__about__container">
                        <p className="item__about__text">{selectedInventory[selectedArmour].itemDescription}</p>
                    </div>

                    <div className="item__skills__container">
                        <div className="item__level">
                            <div className="box__content">
                                <p className="level__title">LV</p>
                                <p className="level__text">{selectedInventory[selectedArmour].itemLevel}</p>
                            </div>
                        </div>
                        <ul className="skills__container">
                            <li className="skills__item">
                                <p className="skills__title">Defense</p>
                                <p className="skills__measure">
                                    {selectedInventory[selectedArmour].itemStrengthDetails.defense}
                                </p>
                            </li>
                            <li className="skills__item">
                                <p className="skills__title">Offense</p>
                                <p className="skills__measure">
                                    {selectedInventory[selectedArmour].itemStrengthDetails.offense}
                                </p>
                            </li>
                            <li className="skills__item">
                                <p className="skills__title">Mobility</p>
                                <p className="skills__measure">
                                    {selectedInventory[selectedArmour].itemStrengthDetails.mobility}
                                </p>
                            </li>
                            <li className="skills__item">
                                <p className="skills__title">Luck</p>
                                <p className="skills__measure">
                                    {selectedInventory[selectedArmour].itemStrengthDetails.luck}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledInventoryScreenArmourSelect>
    );
};
