import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CalendarSvg } from '../../assets/icons/calendar.svg'

const IconContainer = styled.div`
  padding: 0 4px 0 6px;
`

const CalendarIcon = () => {
  return (
    <IconContainer>
      <div>
        <CalendarSvg />
      </div>
    </IconContainer>
  )
}

export default CalendarIcon
