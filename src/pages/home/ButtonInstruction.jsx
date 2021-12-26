import React from 'react';
import { ReactComponent as CrossButton } from '../../assets/cross-button.svg';
import { ReactComponent as CircleButton } from '../../assets/circle-button.svg';
import styled from 'styled-components';

export const StyledButtonInstruction = styled.div`
    display: flex;
    gap: 8px;

    .instruction__text {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        padding: 33px 10px;
        span {
            padding: 0 15px;
            display: flex;
        }
    }
`;
export const ButtonInstruction = ({ canGoBack }) => {
    return (
        <StyledButtonInstruction>
            <p className="instruction__text">
                Press
                <span>
                    <CrossButton />
                </span>
                to select
            </p>
            {canGoBack ? (
                <p className="instruction__text">
                    Press
                    <span>
                        <CircleButton />
                    </span>
                    to go back
                </p>
            ) : null}
        </StyledButtonInstruction>
    );
};
