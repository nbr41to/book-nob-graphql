import type { Meta, StoryObj } from '@storybook/react';

import { BookTable as Component } from './BookTable';
import { bookHandlers } from '@/__mocks__/msw/bookHandlers';

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    msw: bookHandlers,
  },
} satisfies Story;
