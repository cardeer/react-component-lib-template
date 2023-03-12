import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select />

export const Default = Template.bind({})
