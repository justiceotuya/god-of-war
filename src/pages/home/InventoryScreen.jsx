import React from 'react';
import { StyledInventoryScreen } from './style/InventoryScreen.style';
import { InventoryScreenHeaderNavigation } from './InventoryScreenHeaderNavigation';
import { InventoryScreenArmourSelect } from './InventoryScreenArmourSelect';

export const InventoryScreen = ({ handleMoveToPage }) => {
    return (
        <StyledInventoryScreen>
            <InventoryScreenHeaderNavigation />
            <InventoryScreenArmourSelect handleMoveToPage={handleMoveToPage} />
        </StyledInventoryScreen>
    );
};
