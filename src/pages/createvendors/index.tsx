import React, { useState } from 'react'

import Cookies from 'universal-cookie'

const CreateVendor = () => {
  const [formData, setFormData] = useState({
    userId: '',
    vendorName: '',
    storeName: '',
    category: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    idProof: null,
    storeDoc: null,
    storePhotos: null
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFormData = async () => {
    const getCookie = new Cookies()
    const session_data = getCookie.get('session_token')

    try {
      const response = await fetch(
        'http://ec2-65-0-75-157.ap-south-1.compute.amazonaws.com:3000/api/v1/create/vendor',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
            'auth-token': session_data
          }
        }
      )

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
      <h2 style={styles.heading}>Create Vendors</h2>
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
          <label htmlFor='vendorName' style={styles.label}>
            Vendor Name:
          </label>
          <input
            type='text'
            id='vendorName'
            name='vendorName'
            value={formData.vendorName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='storeName' style={styles.label}>
            Store Name:
          </label>
          <input
            type='text'
            id='storeName'
            name='storeName'
            value={formData.storeName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='category' style={styles.label}>
            Category:
          </label>
          <input
            type='text'
            id='category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='address' style={styles.label}>
            Address:
          </label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='email' style={styles.label}>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='phone' style={styles.label}>
            Phone:
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='idProof' style={styles.label}>
            ID Proof:
          </label>
          <input
            type='file'
            id='idProof'
            name='idProof'
            onChange={handleChange}
            style={styles.input}
            accept='.pdf, .jpg, .jpeg, .png'
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='storeDoc' style={styles.label}>
            Store Document:
          </label>
          <input
            type='file'
            id='storeDoc'
            name='storeDoc'
            onChange={handleChange}
            style={styles.input}
            accept='.pdf, .jpg, .jpeg, .png'
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor='storePhotos' style={styles.label}>
            Store Photos:
          </label>
          <input
            type='file'
            id='storePhotos'
            name='storePhotos'
            onChange={handleChange}
            style={styles.input}
            accept='image/*'
            multiple
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

export default CreateVendor
