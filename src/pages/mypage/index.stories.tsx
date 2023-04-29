import type { Meta, StoryObj } from '@storybook/react';
import Component from './index.page';

const meta = {
  title: 'Pages/MyPage',
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
} satisfies Story;
