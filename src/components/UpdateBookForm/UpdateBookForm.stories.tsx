import type { Meta, StoryObj } from '@storybook/react';

import { UpdateBookForm as Component } from './UpdateBookForm';
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
// memo: Component内でmutateを定義するとLoadingのpatternを定義しにくい
