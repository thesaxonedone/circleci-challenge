import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'


describe('HelloWorld.vue', () => {

  it('Checks initial state of component', () => {
    const msg = 'Original Text'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })

  it('Invokes a mouseclick on the button and checks that the expected resultant text is rendered', async () => {
    const msg = 'Original Text'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    await wrapper.find('v-btn').trigger('click');
    expect(wrapper.text()).to.include('New Text!!')
  })
})
