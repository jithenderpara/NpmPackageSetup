import React from 'react';
import { TextBox } from '../components/TextBox';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TextBox',
  component: TextBox,
};

export const Name = () => <TextBox value="Jithu" label="Name">Button</TextBox>;
Name.storyName = 'I am the primary';