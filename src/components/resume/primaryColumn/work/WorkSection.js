import React from 'react'
import PrimarySectionHeading from '../PrimarySectionHeading'
import WorkItem from './WorkItem'

const WorkSection = ({ workList, displayHeading = true }) => (
  <>
    {displayHeading && (
      <PrimarySectionHeading>Experience</PrimarySectionHeading>
    )}
    {workList.map((workItem, i) => (
      <WorkItem key={`${workItem.position}-${i}`} item={workItem} />
    ))}
  </>
)

export default WorkSection
