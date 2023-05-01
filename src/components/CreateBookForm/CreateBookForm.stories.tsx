import type { Meta, StoryObj } from '@storybook/react';

import { CreateBookForm as Component } from './CreateBookForm';
import { DUMMY_AUTHOR_OPTIONS } from '@/__mocks__/author';

const meta = {
  component: Component,
  args: {
    authors: DUMMY_AUTHOR_OPTIONS,
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
} satisfies Story;
