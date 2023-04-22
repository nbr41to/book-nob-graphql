import type { Meta, StoryObj } from '@storybook/react';

import { AuthorCreateForm as Component } from './AuthorCreateForm';

const meta = {
  component: Component,
  args: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
} satisfies Story;

export const Loading: Story = {
  args: {
    loading: true,
  },
} satisfies Story;
