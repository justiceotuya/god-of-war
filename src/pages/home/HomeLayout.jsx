import React from 'react';
import { StyledHomeLayout } from './style/HomeLayout.style';
import { ReactComponent as PSLogo } from '../../assets/ps-logo.svg';
import GodOfWarLogo from '../../assets/god-of-war-logo.svg';

export const HomeLayout = ({ children }) => (
    <StyledHomeLayout>
        <div className="header">
            <img src={GodOfWarLogo} alt="go home" />
            <PSLogo />
        </div>
        <div className="content">{children}</div>
    </StyledHomeLayout>
);
