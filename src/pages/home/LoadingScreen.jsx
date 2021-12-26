import React from 'react';
import { StyledLoadingIcon, StyledLoadingScreen } from './style/LoadingScreen.style';
import { ReactComponent as AxeIcon } from '../../assets/lev-axe.svg';
import { ReactComponent as R1Button } from '../../assets/right-stick-button.svg';

export const LoadingScreen = () => {
    return (
        <StyledLoadingScreen>
            <div className="text__container">
                <p className="instruction__text">
                    The Leviathan Axe passes through enemies as it returns to the hand of Kratos. Use this to your
                    advantage!
                </p>
                <div className="axe__image__container">
                    <span className="left__axe">
                        <AxeIcon />
                    </span>
                    <span className="right__axe">
                        <AxeIcon />
                    </span>
                </div>

                {/* <div className="select__instruction"> */}
                <p className="select__instruction">
                    Press
                    <span>
                        <R1Button />
                    </span>
                    to select
                </p>
            </div>
            <StyledLoadingIcon />
            {/* </div> */}
        </StyledLoadingScreen>
    );
};
