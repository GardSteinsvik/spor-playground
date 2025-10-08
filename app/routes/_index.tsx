import {HStack, TextLink} from '@vygruppen/spor-react'
import {href, NavLink} from 'react-router'

export function meta() {
  return [{title: 'RR7 + Spor'}, {name: 'description', content: 'Welcome to React Router!'}]
}

export default function Component() {
  return (
    <HStack gap={2}>
      <TextLink asChild>
        <NavLink to={href('/hook-form')}>Hookform</NavLink>
      </TextLink>
      <TextLink asChild>
        <NavLink to={href('/date-picker-in-drawer')}>DatePicker in Drawer</NavLink>
      </TextLink>
      <TextLink asChild>
        <NavLink to={href('/force-error')}>Force error</NavLink>
      </TextLink>
    </HStack>
  )
}
