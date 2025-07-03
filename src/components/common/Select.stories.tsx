import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const FRUITS = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];
const TIMEZONES = {
  'North America': [
    { value: 'est', label: 'Eastern Standard Time (EST)' },
    { value: 'cst', label: 'Central Standard Time (CST)' },
    { value: 'mst', label: 'Mountain Standard Time (MST)' },
    { value: 'pst', label: 'Pacific Standard Time (PST)' },
  ],
  'Europe & Africa': [
    { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
    { value: 'cet', label: 'Central European Time (CET)' },
    { value: 'eet', label: 'Eastern European Time (EET)' },
    { value: 'wat', label: 'West Africa Time (WAT)' },
  ],
};

const Template: Story['render'] = () => (
  <Select>
    <SelectTrigger>
      <SelectValue placeholder='Select a fruit' />
    </SelectTrigger>
    <SelectContent>
      {FRUITS.map((fruit) => (
        <SelectItem key={fruit} value={fruit.toLowerCase()}>
          {fruit}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export const Default: Story = {
  render: Template,
  args: {
    disabled: false,
  },
};

export const WithGroupsAndLabel: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select a timezone' />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(TIMEZONES).map(([group, zones], index) => (
          <React.Fragment key={group}>
            <SelectGroup>
              <SelectLabel>{group}</SelectLabel>
              {zones.map((zone) => (
                <SelectItem key={zone.value} value={zone.value}>
                  {zone.label}
                </SelectItem>
              ))}
            </SelectGroup>
            {index < Object.keys(TIMEZONES).length - 1 && <SelectSeparator />}
          </React.Fragment>
        ))}
      </SelectContent>
    </Select>
  ),
};
