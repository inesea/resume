import React from 'react'
import styled from 'styled-components'
import * as styles from '../../../../styles/commonStyles'

const StyledMainDetail = styled.div`
  margin-bottom: 30px;
`
const Name = styled.div`
  font-size: ${styles.text.size.headingLarge};
  font-weight: bold;
  text-transform: ${styles.text.transform.heading};
  letter-spacing: ${styles.text.letterSpacing.medium};
`
const Subtitle = styled.div`
  font-size: ${styles.text.size.headingSemiLarge};
  font-weight: bold;
  letter-spacing: ${styles.text.letterSpacing.medium};
  color: #82BBAD;
`


const SummaryText = styled.div`
  text-align: justify;
`


const MainDetail = ({
  name,
  subtitle,
  summaryText
}) => (
  <StyledMainDetail>
    <Name>{name}</Name>
    <Subtitle>{subtitle}</Subtitle>
    <SummaryText>{summaryText}</SummaryText>
  </StyledMainDetail>
)

export default MainDetail
