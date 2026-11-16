import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import styles from './Alert.module.css';
import Alert from './Alert';
import ALERT_TYPES from './AlertTypes';


describe('Alert dialog component', () => {

    // Render testing for title and text
    it('should render the alert with correct title and text', () => {
        render(
            <Alert 
                id="my-alert" 
                alertType={ALERT_TYPES.SUCCESS} 
                title="Congratulation !" 
                text="You have watch less than 5 hours of video this week." 
            />
        );

        expect(screen.getByText('Congratulation !')).toBeInTheDocument();
        expect(screen.getByText('You have watch less than 5 hours of video this week.')).toBeInTheDocument();
    });

    // Dialog id and opening testing
    it('should create a dialog with the associated id and able to open it', () => {
        render(
            <Alert 
                id="my-alert" 
                alertType={ALERT_TYPES.DANGER} 
                title="Error detected !" 
                text="You have hacked the web site, shame on you !" 
            />
        );

        const dialogElement = document.getElementById('my-alert');

        expect(dialogElement).toBeInTheDocument();
        expect(dialogElement.tagName).toBe('DIALOG');

        expect(dialogElement.open).toBe(false);
        dialogElement.showModal();
        expect(dialogElement.open).toBe(true);
        console.log(dialogElement);
    });

    // Dialog close button testing
    it('should close the dialog when the close button is clicked', async () => {
        render(
            <Alert 
                id="my-alert" 
                alertType={ALERT_TYPES.WARNING} 
                title="Important message" 
                text="Just be careful." 
            />
        );

        const dialogElement = document.getElementById('my-alert');
        dialogElement.showModal();

        const closeButton = document.querySelector(`.${styles.closeModalBtn}`);

        expect(dialogElement.open).toBe(true);
        await userEvent.click(closeButton);
        expect(dialogElement.open).toBe(false);
    });
});
