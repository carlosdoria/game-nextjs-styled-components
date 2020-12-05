import { Story, Meta } from '@storybook/react/types-6-0';

import Home from '../pages';

export default {
  title: 'Home',
  component: Home,
} as Meta;

export const Default: Story = args => <Home {...args} />;

export const Basic: Story = args => <Home {...args} />;
Basic.args = {
  title: 'Teste',
  subtitle: 'teste',
};
Basic.argTypes = {
  background: { control: 'color' },
};
