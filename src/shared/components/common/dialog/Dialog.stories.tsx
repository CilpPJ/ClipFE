import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Common/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant='outline'>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent
          css={css`
            @media (min-width: 640px) {
              max-width: 425px;
            }
          `}
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div
            css={css`
              display: grid;
              gap: 1rem;
            `}
          >
            <div
              css={css`
                display: grid;
                gap: 0.75rem;
              `}
            >
              <Label htmlFor='name-1'>Name</Label>
              <Input id='name-1' name='name' defaultValue='Pedro Duarte' />
            </div>
            <div
              css={css`
                display: grid;
                gap: 0.75rem;
              `}
            >
              <Label htmlFor='username-1'>Username</Label>
              <Input id='username-1' name='username' defaultValue='@peduarte' />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  ),
};
