import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LinkedinSvg } from '../../assets/icons/linkedin.svg'

const IconContainer = styled.div`
  padding: 0 4px 0 0px;
`

const LinkedinIcon = () => {
  return (
    <IconContainer>
      <div>
        <LinkedinSvg />
      </div>
    </IconContainer>
  )
}

export default LinkedinIcon
