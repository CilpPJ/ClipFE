import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircle } from 'lucide-react';
import { Toaster, toast } from 'sonner';

import { Button } from '../button';

const meta: Meta = {
  title: 'Components/Common/Sonner',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster richColors position='top-right' />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj = {
  name: 'Default with Action',
  render: () => (
    <Button
      variant='outline'
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo action triggered!'),
          },
        })
      }
    >
      Show Default Toast
    </Button>
  ),
};

export const Types: StoryObj = {
  name: 'Different Types',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button
        onClick={() =>
          toast.success('Success!', {
            description: 'Your changes have been saved.',
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.info('Info', { description: 'You have a new message.' })
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast.warning('Warning', {
            description: 'Please check your connection.',
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast.error('Error!', { description: 'Could not save your changes.' })
        }
      >
        Error
      </Button>
    </div>
  ),
};

export const PromiseBased: StoryObj = {
  name: 'Promise',
  render: () => {
    const createPromise = (shouldFail: boolean) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject({ message: 'Something went wrong!' });
          } else {
            resolve({ name: 'Sonner' });
          }
        }, 2000);
      });

    return (
      <div
        css={css`
          display: flex;
          gap: 1rem;
        `}
      >
        <Button
          onClick={() =>
            toast.promise(createPromise(false), {
              loading: 'Loading...',
              success: () => `toast has been added!`,
              error: 'Error',
            })
          }
        >
          Show Success Promise
        </Button>
        <Button
          variant='destructive'
          onClick={() =>
            toast.promise(createPromise(true), {
              loading: 'Loading...',
              success: 'Success',
              error: (err) => `Error: ${err.message}`,
            })
          }
        >
          Show Error Promise
        </Button>
      </div>
    );
  },
};

export const CustomComponent: StoryObj = {
  name: 'With Custom Component',
  render: () => (
    <Button
      onClick={() =>
        toast(
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <AlertCircle size={16} />
            <span>A custom toast with an icon</span>
          </div>,
        )
      }
    >
      Show Custom Toast
    </Button>
  ),
};
