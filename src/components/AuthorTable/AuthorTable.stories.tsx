import type { Meta, StoryObj } from '@storybook/react';

import { AuthorTable as Component } from './AuthorTable';

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [],
  },
} satisfies Story;

export const Loading: Story = {
  args: {
    list: [],
    loading: true,
  },
} satisfies Story;
