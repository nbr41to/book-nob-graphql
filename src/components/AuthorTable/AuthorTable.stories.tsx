import type { Meta, StoryObj } from '@storybook/react';

import { AuthorTable as Component } from './AuthorTable';
import { DUMMY_AUTHORS } from '@/__mocks__/author';

const meta = {
  component: Component,
  args: {
    list: DUMMY_AUTHORS,
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
} satisfies Story;

export const Loading: Story = {
  args: {
    list: [],
    loading: true,
  },
} satisfies Story;
