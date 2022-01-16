import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import data from './data/data'
import * as styles from './styles/commonStyles'
import Preview from './views/Preview'

const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: ${styles.text.size.main};
  line-height: ${styles.text.lineHight.main};
  color: ${styles.text.color.main};
  min-width: 100vw;
`

const App = () => (
  <StyledApp>
    <Router>
      <Routes>
        <Route exact path="/" element={<Preview resume={data} />} />
      </Routes>
    </Router>
  </StyledApp>
)

export default App
