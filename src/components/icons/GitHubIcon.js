import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GitHubSvg } from '../../assets/icons/github.svg'

const IconContainer = styled.div`
  padding: 0 4px 0 0px;
`

const LinkedinIcon = () => {
  return (
    <IconContainer>
      <div>
        <GitHubSvg />
      </div>
    </IconContainer>
  )
}

export default LinkedinIcon
