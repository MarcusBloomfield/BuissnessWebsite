import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ContactForm from './ContactForm.vue'

describe('ContactForm.vue', () => {
  let openSpy
  let mockComposeWindow

  beforeEach(() => {
    mockComposeWindow = {
      opener: {},
      location: {
        href: ''
      }
    }
    openSpy = vi.spyOn(window, 'open').mockReturnValue(mockComposeWindow)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should show email options when submitted', async () => {
    const wrapper = mount(ContactForm)

    await wrapper.find('#name').setValue('Test User')
    await wrapper.find('#email').setValue('test@example.com')
    await wrapper.find('#subject').setValue('Commercial')
    await wrapper.find('#message').setValue('This is a test enquiry.')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Gmail')
    expect(wrapper.text()).toContain('Outlook')
    expect(wrapper.text()).toContain('Yahoo Mail')
    expect(wrapper.text()).toContain('Default Mail App')
    expect(openSpy).not.toHaveBeenCalled()
  })

  it('should open a Gmail compose window when Gmail is selected', async () => {
    const wrapper = mount(ContactForm)

    await wrapper.find('#name').setValue('Test User')
    await wrapper.find('#email').setValue('test@example.com')
    await wrapper.find('#subject').setValue('Commercial')
    await wrapper.find('#message').setValue('This is a test enquiry.')

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.findAll('.email-option')[0].trigger('click')

    const expectedUrl = new URL('https://mail.google.com/mail/')
    expectedUrl.search = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: 'marcusbloomfield3@gmail.com',
      su: 'New Enquiry: Commercial - Test User',
      body: 'Name: Test User\nEmail: test@example.com\n\nMessage:\nThis is a test enquiry.'
    }).toString()

    expect(openSpy).toHaveBeenCalledWith('', '_blank')
    expect(mockComposeWindow.opener).toBeNull()
    expect(mockComposeWindow.location.href).toBe(expectedUrl.toString())
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })
})
