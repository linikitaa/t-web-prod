import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import "app/styles/index.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import avatarImg from "./storybook.jpeg";
const meta = {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: avatarImg,
    size: 150,
  },
  decorators: [StyleDecorator],
};
export const Small: Story = {
  args: {
    src: avatarImg,
    size: 50,
  },
  decorators: [StyleDecorator],
};
