import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "app/styles/index.scss";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({ login: { username: "123", password: "123" } })],
};
