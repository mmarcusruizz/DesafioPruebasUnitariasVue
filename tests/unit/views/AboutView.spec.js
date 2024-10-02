import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(AboutView)
    expect(wrapper.text()).toContain('About')
  }),
  it('matches the snapshot', () => {
    const wrapper = shallowMount(AboutView)
    expect(wrapper.html()).toMatchSnapshot()
  })

})