import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";
import "./../app/globals.css";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    title: { control: "text" },
    className: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    title: "Click Me",
    isLoading: false,
    type: "button",
    className: "",
  },
};


export const Loading: Story = {
  args: {
    title: "Loading...",
    isLoading: true,
    type: "button",
    className: "",
  },
};


export const Disabled: Story = {
  args: {
    title: "Click Me",
    type: "button",
    className: "bg-slate-600",
  },
};

export const CustomStyled: Story = {
  args: {
    title: "Custom Style",
    isLoading: false,
    type: "button",
    className: "bg-green-500 text-white hover:bg-green-600",
  },
};
