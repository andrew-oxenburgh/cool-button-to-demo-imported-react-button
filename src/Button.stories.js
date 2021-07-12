import React from 'react';

import Button from './components/Button';

export default {
   title: 'Example/Button',
   component: Button,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
   label: 'Their Button',
   backgroundColor: 'yellow',
   onClick: () => {alert('Button clicked');}
};

export const Standard = Template.bind({});
Standard.args = {
   label: 'what?',
   backgroundColor: 'red',

};
