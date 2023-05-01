import type { Meta, StoryObj } from '@storybook/react';

import { AuthorForm as Component } from './AuthorForm';

const meta = {
  component: Component,
  args: {
    defaultValues: {
      id: '1',
      name: 'John Doe',
      email: 'example@example.com',
    },
  },
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
