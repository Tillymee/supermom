import { describe, it, expect } from 'vitest'
import HomeView from '../../views/HomeView.vue'

import { mount } from '@vue/test-utils'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.text()).toContain('SUPERMOM')
  })
})
