import type { Meta, StoryObj } from '@storybook/react';

import { AuthorUpdateForm as Component } from './AuthorUpdateForm';

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
