import React from 'react'
import moment from 'moment'
import styled, { withTheme } from 'styled-components'
import { textColor } from '../theme'
import { P } from '../components/styled'

const Title = styled.div.attrs({
  className: 'font-bold text-2xl tracking-wide',
})`
  color: ${textColor};
  transition: color 0.5s ease-in-out;
`
const Ago = styled.div.attrs({
  className: 'text-xs tracking-narrow font-bold',
})`
  color: ${textColor};
  transition: color 0.5s ease-in-out;
`

const Card = ({ title, date, tags = [], description }) => {
  return (
    <div className="card shadow-lg rounded-lg m-3 lift-on-hover">
      <div className="px-6 py-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <Title>{title}</Title>
            <Ago>{moment(date).fromNow()}</Ago>
            <P>{description}</P>
          </div>
          {tags.length > 0 && (
            <div>
              <ul
                className="mt-2 flex flex-row flex-wrap lg:justify-end"
                aria-label="technologies used"
                role="group"
              >
                {tags.map((t, i) => (
                  <li
                    key={i}
                    className="bg-primary rounded-full px-3 py-1 text-2xs font-semibold tracking-wide text-gray-200 mr-1  mb-2"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withTheme(Card)