import React from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles/commonStyles'
import SecondarySection from './SecondarySection'
import SecondarySectionContact from './SecondarySectionContact'
import SecondarySectionEducation from './SecondarySectionEducation'
import SecondarySectionTechnologies from './SecondarySectionTechnologies'

const Wrapper = styled.div`
  background: ${styles.background.secondary};
  padding-top: 116px;
  padding-left: 15px;
  padding-right: 15px;
  -webkit-print-color-adjust: exact;
  @media print {
    padding-top: 80px;
  }
`

const SecondaryColumn = ({ resume }) => {
  const { languages, skills1, skills2, skills3, education, basics } = resume

  const languagesList = languages
    ? languages.map((item) => `${item.name} - ${item.fluency}`)
    : null

  return (
    <Wrapper>
      <SecondarySectionContact basics={basics} />
      {skills1 && (
        <SecondarySectionTechnologies {...{ skills1, skills2, skills3 }} />
      )}
      {education && education.length !== 0 && (
        <SecondarySectionEducation title="Education" listItems={education} />
      )}
      {languagesList && languagesList.length !== 0 && (
        <SecondarySection title="Languages" listItems={languagesList} />
      )}
    </Wrapper>
  )
}

export default SecondaryColumn
