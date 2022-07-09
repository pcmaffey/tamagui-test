import { Text, YStack, MyComponent } from '@my/ui'

import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <MyComponent>
      <Text>test</Text>
    </MyComponent>
  )
}
