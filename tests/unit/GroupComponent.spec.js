import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import GroupComponent from '@/components/GroupComponent.vue'

describe('GroupComponent.vue', () => {
  it('renders props.data when passed', () => {
    const item = {
        title: 'Hello World',
        content: []
    }
    const wrapper = shallowMount(GroupComponent, {
      propsData: { item }
    })
    expect(wrapper.text()).to.include(item.title)
  })
})
