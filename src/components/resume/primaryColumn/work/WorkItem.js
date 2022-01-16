import React from 'react'
import styled from 'styled-components'
import * as styles from '../../../../styles/commonStyles'
import CalendarIcon from '../../../icons/CalendarIcon'
import LocationIcon from '../../../icons/LocationIcon'

const StyledWorkItem = styled.div`
  padding-bottom: 14px;
`
const Position = styled.div`
  font-weight: bold;
  margin-left: 10px;
`
const LineContainer = styled.div`
  display: flex;
  align-items: left;
`
const Company = styled.div`
  font-weight: bold;
  color: ${styles.text.color.highlight};
  margin-right: 5px;
`
const Location = styled.div`
  margin-right: 8px;
  color: ${styles.text.color.secondary};
`
const Dates = styled.div`
  margin-right: 7px;
  font-style: italic;
  color: ${styles.text.color.secondary};
`
const List = styled.ul`
  margin-top: 0px;
  list-style-position: outside;
  margin-bottom: 0px;
`
const Highlight = styled.li``

const WorkItem = ({ item }) => (
  <StyledWorkItem>
    <LineContainer>
      <Company>{item.name}</Company>
      <LocationIcon />
      <Location>{item.location}</Location>
    </LineContainer>
    <LineContainer>
      {item.position && <Position>{item.position}</Position>}
      {item.startDate && <CalendarIcon />}
      {item.startDate && <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>}
    </LineContainer>
    {item.subSections &&
      item.subSections.map((section, i) => (
        <span key={i}>
          <LineContainer key={`${section.position}-${i}`}>
            {section.position && <Position>{section.position}</Position>}
            {section.startDate && <CalendarIcon />}
            {section.startDate && (
              <Dates>{`${section.startDate} - ${section.endDate}`}</Dates>
            )}
          </LineContainer>
          <List>
            {section.highlights.map((highlight, index) => (
              <Highlight key={`${index}-${highlight}`}>{highlight}</Highlight>
            ))}
          </List>
        </span>
      ))}
    {item.highlights && (
      <List>
        {item.highlights.map((highlight, index) => (
          <Highlight key={`${index}-${highlight}`}>{highlight}</Highlight>
        ))}
      </List>
    )}
  </StyledWorkItem>
)

export default WorkItem
