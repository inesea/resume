import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SecondarySectionHeading'

const StyledSecondarySection = styled.div`
  margin-bottom: 40px;
`

const getBackgroundColor = (level) => {
  if(level === 1) {
    return "#0C82C6"
  }
  if(level === 2) {
    return "#50A6D7"
  }
  if(level === 3) {
    return "#75BAE1"
  }
}

const TechItem = styled.span`
  padding: 2px 4px 2px 4px;
  background-color: ${(props) => getBackgroundColor(props.level)};
  color: white;
  font-weight: bold;
  margin: 2px;
  border-radius: 4px;
  -webkit-print-color-adjust: exact;
`

const TechContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

const SecondarySectionTechnologies = ({
  skills1, skills2, skills3
}) => (
  <StyledSecondarySection>
    <SectionHeading>Key Tech</SectionHeading>
    <TechContainer>
    {skills1.map(item => (
        <TechItem level={1} key={item} >{item}</TechItem>
    ))}
    {skills2.map(item => (
        <TechItem level={2} key={item} >{item}</TechItem>
    ))}
    {skills3.map(item => (
        <TechItem level={3} key={item} >{item}</TechItem>
    ))}
    </TechContainer>
  </StyledSecondarySection>
)

export default SecondarySectionTechnologies
