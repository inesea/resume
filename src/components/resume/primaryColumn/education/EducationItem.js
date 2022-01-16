import React from 'react'
import styled from 'styled-components'
import * as styles from '../../../../styles/commonStyles'
import CalendarIcon from '../../../icons/CalendarIcon'
import LocationIcon from '../../../icons/LocationIcon'

const StyledEducationItem = styled.div`
  padding-bottom: 8px;
`
const Degree = styled.div`
  font-weight: bold;
`
const LineContainer = styled.div`
  display: flex;
  align-items: left;
  padding-bottom: 3px;
  margin-left: 2px;
`
const Institution = styled.div`
  font-weight: bold;
  margin-left: 5px;
  color: #3CA1C6;
`
const Location = styled.div`
  margin-right: 8px;
  color: ${styles.text.color.secondary};
`
const Dates = styled.div`
  margin-right: 5px;
  font-style: italic;
  color: ${styles.text.color.secondary};
`

const EducationItem = ({ item }) => (
  <StyledEducationItem>
    <Degree>{`${item.studyType} ${item.area}`}</Degree>
    <Institution>{item.institution}</Institution>
    <LineContainer>
      <CalendarIcon />
      <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>
      <LocationIcon />
      <Location>{item.location}</Location>
    </LineContainer>
  </StyledEducationItem>
)

export default EducationItem
