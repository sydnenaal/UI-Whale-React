import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Input from "../components/input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story = (args: any) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  size: "normal",
  fullWidth: false,
  disabled: false,
  compact: false,
};
