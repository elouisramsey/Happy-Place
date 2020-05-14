import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setMessage('')
    setEmail('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type='textarea'
        className='message'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input type='submit' value='send' className='submit btn-primary' />
    </form>
  )
}

export default ContactForm
