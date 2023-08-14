import type { Meta, StoryObj} from "@storybook/vue3"
import BaseButton from  "./BaseButton.vue"

const meta: Meta<typeof BaseButton> = {
    component: BaseButton
}

export default meta;
type Story = StoryObj<typeof BaseButton>

export const SimpleBaseButton:Story = {
    render: () => ({
        components: {BaseButton},
        template: '<BaseButton>Hello</BaseButton>'
    })
}