import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PhoneSvg } from '../../assets/icons/phone.svg'

const IconContainer = styled.div`
  padding: 0 2px 0 0px;
`

const PhoneIcon = () => {
  return (
    <IconContainer>
      <div>
        <PhoneSvg />
      </div>
    </IconContainer>
  )
}

export default PhoneIcon
