import React from 'react'
import styled from 'styled-components'
import MainDetail from './main/MainDetail'
import WorkSection from './work/WorkSection'

const Wrapper = styled.div`
  padding-top: 100px;
  -webkit-print-color-adjust: exact;
  @media print {
    padding-top: 60px;
  }
`

const PrimaryColumn = ({ resume }) => {
  const { basics, work } = resume
  return (
    <Wrapper>
      <MainDetail
        name={basics.name}
        email={basics.email}
        phoneNumber={basics.phone}
        subtitle={basics.subtitle}
        summaryText={basics.summary}
      />
      <WorkSection workList={work.filter((workItem) => workItem.page === 1)} />
    </Wrapper>
  )
}

export default PrimaryColumn
