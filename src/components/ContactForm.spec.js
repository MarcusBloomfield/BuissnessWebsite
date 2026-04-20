import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ContactForm from './ContactForm.vue'

describe('ContactForm.vue', () => {
  let createElementSpy
  let clickSpy
  let mockAnchor

  beforeEach(() => {
    clickSpy = vi.fn()
    const originalCreateElement = document.createElement.bind(document)
    createElementSpy = vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'a') {
        mockAnchor = {
          href: '',
          click: clickSpy
        }
        return mockAnchor
      }
      return originalCreateElement(tagName)
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    mockAnchor = undefined
  })

  it('should trigger a mailto link when submitted', async () => {
    const wrapper = mount(ContactForm)

    // Fill out the form
    await wrapper.find('#name').setValue('Test User')
    await wrapper.find('#email').setValue('test@example.com')
    await wrapper.find('#subject').setValue('Commercial')
    await wrapper.find('#message').setValue('This is a test enquiry.')

    // Submit the form
    await wrapper.find('form').trigger('submit.prevent')

    // Verify the mailto link was correctly generated
    const subject = encodeURIComponent(`New Enquiry: Commercial - Test User`)
    const body = encodeURIComponent(`Name: Test User\nEmail: test@example.com\n\nMessage:\nThis is a test enquiry.`)
    const expectedMailto = `mailto:marcusbloomfield2@gmail.com?subject=${subject}&body=${body}`
    
    expect(createElementSpy).toHaveBeenCalledWith('a')
    
    // Check if the mock anchor tag was assigned the correct href and clicked
    expect(mockAnchor).toBeDefined()
    expect(mockAnchor.href).toBe(expectedMailto)
    expect(clickSpy).toHaveBeenCalled()
  })
})