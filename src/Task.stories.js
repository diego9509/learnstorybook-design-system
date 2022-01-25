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
    title: 'Primary',
    value: 'E0205C'
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  task: {
    ...Default.args.task,
    title: 'Secondary',
    value: '26B9D1'
  },
};
