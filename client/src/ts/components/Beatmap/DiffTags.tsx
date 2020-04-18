import React, { CSSProperties, FunctionComponent } from 'react'

interface IProps {
  beginner?: boolean
  standard?: boolean
  advanced?: boolean
  expert?: boolean

  style?: CSSProperties
}

export const DiffTags: FunctionComponent<IProps> = ({
  beginner,
  standard,
  advanced,
  expert,

  style,
}) => (
  <div className='tags' style={style}>
    {beginner ? <span className='tag is-beginner'>Beginner</span> : null}
    {standard ? <span className='tag is-standard'>Standard</span> : null}
    {advanced ? <span className='tag is-advanced'>Advanced</span> : null}
    {expert ? <span className='tag is-expert'>Expert</span> : null}
  </div>
)
