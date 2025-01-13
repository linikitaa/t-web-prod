import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Loader } from "shared/ui/Loader/Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
