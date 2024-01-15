import React, { useState } from 'react'

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFormData = async () => {
    try {
      const response = await fetch('http://ec2-65-0-75-157.ap-south-1.compute.amazonaws.com:3000/api/v1/admin/create', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        // Successful form submission
        alert('Form submitted successfully!')
      } else {
        const errorData = await response.json()

        alert(`Error submitting form: ${response.status} - ${errorData.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An unexpected error occurred. Please try again later.')
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleFormData()
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Admin</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor='userId' style={styles.label}>
            User ID:
          </label>
          <input
            type='text'
            id='userId'
            name='userId'
            value={formData.userId}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor='password' style={styles.label}>
            Password:
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type='submit' style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '400px' as const,
    margin: 'auto' as const,
    padding: '20px' as const
  },
  heading: {
    textAlign: 'center' as const
  },
  form: {
    display: 'flex' as const,
    flexDirection: 'column' as const
  },
  formGroup: {
    marginBottom: '15px' as const
  },
  label: {
    marginBottom: '5px' as const
  },
  input: {
    padding: '8px' as const,
    fontSize: '16px' as const,
    width: '100%' as const,
    boxSizing: 'border-box' as const
  },
  button: {
    padding: '10px' as const,
    fontSize: '16px' as const,
    backgroundColor: '#4CAF50' as const,
    color: 'white' as const,
    border: 'none' as const,
    cursor: 'pointer' as const
  }
}

export default CreateAdmin
