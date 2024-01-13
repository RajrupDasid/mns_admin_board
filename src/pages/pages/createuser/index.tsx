import React, { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const createuser = () => {
  return <div>createuser</div>
}

createuser.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default createuser
