import React from 'react'
import LoginLayout from '../../../components/layouts/LoginLayout'
import Recoveryo from '../../../components/dashboard/recovery/Recovery'

const Recovery = ({theme, setTheme}) => {
  return (
    <LoginLayout theme={theme} setTheme={setTheme}>
      <Recoveryo />
    </LoginLayout>
  )
}

export default Recovery