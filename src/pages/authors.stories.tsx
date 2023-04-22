import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Component from './authors.page';
import { authorHandlers } from '@/__mocks__/msw/authorHandlers';
import { expect } from '@storybook/jest';
import { graphql } from 'msw';

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
    msw: {
      handlers: authorHandlers,
    },
  },
} satisfies Story;

export const CreateAuthor: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Open create modal', async () => {
      await userEvent.click(
        canvas.getByRole('button', {
          name: 'New author',
        }),
      );
      await expect(canvas.getByText('Create new author')).toBeVisible();
    });

    await step('Input name and email', async () => {
      await userEvent.type(canvas.getByLabelText('name'), 'author-name');
      await userEvent.type(
        canvas.getByLabelText('email'),
        'example@example.com',
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
