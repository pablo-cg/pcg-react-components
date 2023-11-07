import { Meta, StoryObj } from '@storybook/react';
import { AppLabel, type Props } from '../components/app-label';

const meta: Meta<Props> = {
  title: 'AppLabel',
  component: AppLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' },
    color: { control: 'inline-radio' },
    allCaps: { control: 'boolean' },
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof AppLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps Label',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: '#5ab1ff',
  },
};
