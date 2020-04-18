import React, { FunctionComponent } from 'react'
import { ExtLink } from '../components/ExtLink'
import { TextPage } from '../components/TextPage'

export const Index: FunctionComponent = () => (
  <TextPage title='MAudica'>
    <p>Audica's #1 unofficial beatmap distributor!</p>
    <hr />

    <p>
      <b>Not everything is finished yet, please be patient.</b>
      <br />
      See{' '}
      <ExtLink href='https://github.com/MAudica/maudica-beatsaver'>
        the GitHub repo
      </ExtLink>{' '}
      for more info.
    </p>
  </TextPage>
)
