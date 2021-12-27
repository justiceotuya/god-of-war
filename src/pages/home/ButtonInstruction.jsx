import React from 'react';
import { ReactComponent as CrossButton } from '../../assets/cross-button.svg';
import { ReactComponent as CircleButton } from '../../assets/circle-button.svg';
import styled from 'styled-components';

export const StyledButtonInstruction = styled.div`
    display: flex;
    column-gap: 28px;
    row-gap: 8px;
    padding-bottom: 8px;
    flex-wrap: wrap;

    .instruction__text {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        span {
            padding: 0 8px;
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
