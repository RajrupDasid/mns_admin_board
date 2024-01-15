import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

// Define the interface for user data
interface User {
  id: string
  name: string
  phone: string
  email: string
  userId: string
  teamLeaderId: string
  createdAt: string
  updatedAt: string
  role: string
  vendorName: string
  agent: string
}

const VendorList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchData = async () => {
    const getCookie = new Cookies()
    const session_data = getCookie.get('session_token')

    try {
      const api = `http://ec2-65-0-75-157.ap-south-1.compute.amazonaws.com:3000/api/v1/agents`
      const res = await axios.get(api, {
        headers: {
          'Content-Type': 'application/json',

          'auth-token': session_data
        }
      })
      setUsers(res.data)
    } catch (error: any) {
      console.log('Error fetching data:', error)
      if (error.response) {
        console.log('Response data:', error.response.data)
      }
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Agent List</h2>
      <button onClick={fetchData} style={{ marginBottom: '10px' }}>
        Fetch Agent Data
      </button>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={tableHeaderStyle}>id</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Role</th>
            <th style={tableHeaderStyle}>userID</th>
            <th style={tableHeaderStyle}>teamLeaderId</th>
            <th style={tableHeaderStyle}>Created At</th>
            <th style={tableHeaderStyle}>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id} style={tableRowStyle}>
                <td style={tableCellStyle}>{user.agent?.id}</td>
                <td style={tableCellStyle}>{user.agent?.name}</td>
                <td style={tableCellStyle}>{user.role}</td>
                <td style={tableCellStyle}>{user.agent?.userId}</td>
                <td style={tableCellStyle}>{user.agent?.teamLeaderId}</td>
                <td style={tableCellStyle}>{user.agent?.createdAt}</td>
                <td style={tableCellStyle}>{user.agent?.updatedAt}</td>
              </tr>
            ))
          ) : (
            <tr style={tableRowStyle}>
              <td colSpan={3} style={tableCellStyle}>
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left' as const // Corrected the type for textAlign
}

const tableRowStyle = {
  borderBottom: '1px solid #ddd'
}

const tableCellStyle = {
  padding: '10px'
}
export default VendorList
