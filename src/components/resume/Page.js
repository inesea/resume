import React from 'react'
import styled from 'styled-components'
import ColumnLayout from './columnLayout/ColumnLayout'
import PrimaryColumn from './primaryColumn/PrimaryColumn'
import SecondaryColumn from './secondaryColumn/SecondaryColumn'

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5cm 0 1.25cm;
  @media print {
    padding: 0;
  }
`

const Page = ({ resume, printable }) => (
  <StyledPage className="Page">
    <ColumnLayout>
      <PrimaryColumn resume={resume} printable={printable} />
      <SecondaryColumn resume={resume} printable={printable} />
    </ColumnLayout>
  </StyledPage>
)

export default Page
