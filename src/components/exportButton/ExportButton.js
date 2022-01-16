import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  padding: 20px 0 30px 0;
  width: 100px;
  margin: 0 auto;
  @media print {
    display: none;
  }
`

const Button = styled.button`
  background-color: #e6e6e6;
  color: ${({ isDisabled }) => (!isDisabled ? '#336699' : 'darkgray')};
  font-size: 12px;
  border: none;
  height: 40px;
  width: 100px;
  border-radius: 4px;
  &:hover {
    cursor: ${({ isDisabled }) => (isDisabled ? 'wait' : 'pointer')};
    background-color: lightgrey;
  }
`

const ExportButton = () => {
  const handleClick = async () => {
    window.print()
  }
  return (
    <ButtonContainer>
      <Button type="button" onClick={handleClick}>
        Save As PDF
      </Button>
    </ButtonContainer>
  )
}

export default ExportButton
