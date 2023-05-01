import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { BooksPage as Component } from './BooksPage';
import { bookHandlers } from '@/__mocks__/msw/bookHandlers';
import { expect } from '@storybook/jest';
import { authorHandlers } from '@/__mocks__/msw/authorHandlers';

const meta = {
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    msw: [...authorHandlers, ...bookHandlers],
  },
} satisfies Story;

export const CreateBook: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Open create modal', async () => {
      await userEvent.click(
        canvas.getByRole('button', {
          name: 'New book',
        }),
      );
      await expect(canvas.getByText('Create new author')).toBeVisible();
    });

    await step('Input body', async () => {
      await userEvent.type(canvas.getByLabelText('title'), 'book-title');
      await userEvent.type(
        canvas.getByLabelText('description'),
        'book-description',
      );
    });

    await step('Submit form', async () => {
      await userEvent.click(
        canvas.getByRole('button', {
          name: 'Submit',
        }),
      );
    });
  },
} satisfies Story;
