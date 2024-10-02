import { shallowMount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue'

describe('ContactView', () => {
  it('renders the component with correct title', () => {
    const wrapper = shallowMount(ContactView)
    expect(wrapper.find('h1').text()).toBe('Contáctanos')
  })

  it('should have a form with name and email inputs', () => {
    const wrapper = shallowMount(ContactView)
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
    expect(form.find('#name').exists()).toBe(true)
    expect(form.find('#email').exists()).toBe(true)
  })
})