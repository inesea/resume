import React from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles/commonStyles'
import EmailIcon from '../../icons/EmailIcon'
import GitHubIcon from '../../icons/GitHubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import SectionHeading from './SecondarySectionHeading'

const StyledSecondarySection = styled.div`
  margin-bottom: 40px;
`
const ContactDetailsLine = styled.div`
  display: flex;
  align-items: left;
  font-size: ${styles.text.size.secondary};
  color: ${styles.text.color.main};
  padding-bottom: 4px;
`
const ContactDetailContainer = styled.div`
  letter-spacing: 1px;
  padding-left: 3px;
`

const LinkedinContainer = styled.a`
  text-decoration: underline;
  color: inherit;
  letter-spacing: 1px;
  padding-left: 3px;
`

const SecondarySectionContact = ({
  basics
}) => (
  <StyledSecondarySection>
    <SectionHeading>Contact</SectionHeading>
    <ContactDetailsLine>
      <EmailIcon />
      <ContactDetailContainer>{basics.email}</ContactDetailContainer>
    </ContactDetailsLine>
    <ContactDetailsLine>
      <PhoneIcon />
      <ContactDetailContainer>{basics.phone}</ContactDetailContainer>
    </ContactDetailsLine>
    <ContactDetailsLine>
      <LinkedinIcon />
      <LinkedinContainer target="_blank" href={basics.profiles.find(profile=>profile.network === "Linkedin").url}>Linkedin</LinkedinContainer>
    </ContactDetailsLine>
    <ContactDetailsLine>
      <GitHubIcon />
      <LinkedinContainer target="_blank" href={basics.profiles.find(profile=>profile.network === "GitHub").url}>GitHub</LinkedinContainer>
    </ContactDetailsLine>
  </StyledSecondarySection>
)

export default SecondarySectionContact
