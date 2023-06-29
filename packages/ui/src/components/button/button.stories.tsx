import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Inverted: Story = {
  args: {
    children: "Action",
  },
}

export const Neutral: Story = {
  args: {
    children: "Action",
    variant: "neutral",
  },
}

export const Transparent: Story = {
  args: {
    children: "Action",
    variant: "transparent",
  },
}

export const Danger: Story = {
  args: {
    children: "Action",
    variant: "danger",
  },
}

export const Disabled: Story = {
  args: {
    children: "Action",
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: [
      "Action",
      <span key={1} className="w-5 h-5 flex items-center justify-center">
        x
      </span>,
    ],
  },
}

export const IconOnly: Story = {
  args: {
    children: (
      <span className="w-5 h-5 flex items-center justify-center">x</span>
    ),
    format: "icon",
  },
}
