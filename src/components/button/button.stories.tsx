import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>This is a button</Button>
)

export const Default = Template.bind({})
