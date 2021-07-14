import React from 'react';

import DemoButton from './components/DemoButton';

export default {
   title: 'Example/Button',
   component: DemoButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
};

const Template = (args) => <DemoButton {...args} />;

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
