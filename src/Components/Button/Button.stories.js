
import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
            size: {
                options: ['small', 'midle', 'large'],
                control: { type: 'radio' },
            },
        }
    },
};

const Template = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    size: 'large',
    label: 'Button',
};


export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
