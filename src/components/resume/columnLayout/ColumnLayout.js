import React from 'react'
import styled from 'styled-components'

const StyledColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 27%;
  grid-gap: 3%;
  height: 100%;
`

const ColumnLayout = ({ children }) => (
  <StyledColumnLayout>{children}</StyledColumnLayout>
)

export default ColumnLayout
