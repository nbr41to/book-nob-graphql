import type { Meta, StoryObj } from '@storybook/react';

import { BookTable as Component } from './BookTable';
import { DUMMY_BOOKS } from '@/__mocks__/book';
import { DUMMY_AUTHOR_OPTIONS } from '@/__mocks__/author';

const meta = {
  component: Component,
  args: {
    list: DUMMY_BOOKS,
    authors: DUMMY_AUTHOR_OPTIONS,
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
