import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TodoComponent from '@/components/TodoComponent.vue'

describe('TodoComponent.vue', () => {
  it('renders props.data when passed', () => {
    const todoList = {
        title: 'Hello World',
        content: [
            {
                item: 'It should include me!!!!',
                completed: false
            }
        ]
    }
    const wrapper = shallowMount(TodoComponent, {
      propsData: { todoList }
    })
    expect(wrapper.text()).to.include(todoList.content.item)
  })
})
