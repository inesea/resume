import React from 'react'
import styled from 'styled-components'
import ExportButton from '../components/exportButton/ExportButton'
import Page from '../components/resume/Page'
import { A4_HEIGHT_CM, A4_WIDTH_CM } from '../constants/constants'

const StyledPreview = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  @media print {
    margin: 0;
  }
`
const PageImitation = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  width: ${A4_WIDTH_CM}cm;
  height: ${A4_HEIGHT_CM}cm;
  @media print {
    box-shadow: none;
    margin: 0;
    width: auto;
    height: auto;
  }
`

const Preview = ({ resume }) => (
  <StyledPreview className="Preview">
    <ExportButton fileName={`Resume - ${resume.basics.name}`} />
    <PageImitation>
      <Page resume={resume} printable={false} />
    </PageImitation>
  </StyledPreview>
)

export default Preview
