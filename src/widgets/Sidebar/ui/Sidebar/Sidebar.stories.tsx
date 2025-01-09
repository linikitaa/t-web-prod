import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator";

const meta = {
  title: "widget/Sidebar",
  component: Sidebar,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} as Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};
