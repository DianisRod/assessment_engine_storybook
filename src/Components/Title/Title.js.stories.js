import React from 'react';
import Title from './Title';

export default {
    title: 'Title',
    component: Title,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
};

export const Text = () =>
    <Title class="fddocs-container">
        <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon">
            <i role="presentation" class="fd-info-label__icon sap-icon--future"></i>
            <span class="fd-info-label__text"> Assessment Engine</span>
        </span>
        <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon">
            <i role="presentation" class="fd-info-label__icon sap-icon--upload-to-cloud"></i>
        </span>
    </Title>




