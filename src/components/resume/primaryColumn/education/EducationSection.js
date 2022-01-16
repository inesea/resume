import React from 'react'
import MainSectionWrapper from '../main/MainSectionWrapper'
import PrimarySectionHeading from '../PrimarySectionHeading'
import EducationItem from './EducationItem'

const EducationSection = ({ educationList }) => (
  <MainSectionWrapper>
    <PrimarySectionHeading>Education</PrimarySectionHeading>
    {educationList.map(item => (
      <EducationItem key={`${item.studyType}-${item.area}`} item={item} />
    ))}
  </MainSectionWrapper>
)

export default EducationSection
