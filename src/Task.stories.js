import React from 'react';
import Task from './Task';

export default {
  title: 'Design System/Task',
  component: Task
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'primary',
    value: 'E0205C'
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  task: {
    ...Default.args.task,
    title: 'secondary',
    value: '26B9D1'
  },
};
