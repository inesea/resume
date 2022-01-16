import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SecondarySectionHeading'

const StyledSecondarySection = styled.div`
  margin-bottom: 40px;
`

const SecondarySection = ({ title, listItems }) => (
  <StyledSecondarySection>
    <SectionHeading>{title}</SectionHeading>
    {listItems.map(item => (
      <div key={item}>{item}</div>
    ))}
  </StyledSecondarySection>
)

export default SecondarySection
