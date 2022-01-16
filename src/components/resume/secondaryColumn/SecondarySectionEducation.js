import React from 'react'
import styled from 'styled-components'
import EducationItem from '../primaryColumn/education/EducationItem'
import SectionHeading from './SecondarySectionHeading'

const StyledSecondarySection = styled.div`
  margin-bottom: 40px;
`

const SecondarySectionEducation = ({
  title,
  listItems
}) => (
  <StyledSecondarySection>
    <SectionHeading>{title}</SectionHeading>
    {listItems.map(item => (
      <EducationItem key={item.institution} item={item} />
    ))}
  </StyledSecondarySection>
)

export default SecondarySectionEducation
