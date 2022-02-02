import React from 'react';
import Subtitle from './Subtitle';
import { action } from "@storybook/addon-actions"

export default {
    title: 'Subtitle',
    component: Subtitle,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
};
// onClick={action("clicked")}> Assessment Engine

export const Link = () =>
    <Subtitle
        onClick={action("clicked")}>React Basic Assessment
    </Subtitle>




