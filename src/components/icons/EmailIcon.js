import React from 'react'
import styled from 'styled-components'
import { ReactComponent as EmailSvg } from '../../assets/icons/email.svg'

const IconContainer = styled.div`
  padding: 0 4px 0 0px;
`

const EmailIcon = () => {
  return (
    <IconContainer>
      <div>
        <EmailSvg />
      </div>
    </IconContainer>
  )
}

export default EmailIcon
