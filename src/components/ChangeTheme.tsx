import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { FC } from 'react'

interface ChangeThemeProps {
  isReverse?: boolean
  iconSize?: number
}

export const ChangeTheme: FC<ChangeThemeProps> = ({ isReverse, iconSize }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = isReverse ? colorScheme !== 'dark' : colorScheme === 'dark'

  const actualIconSize = iconSize ?? 24

  return (
    <ActionIcon
      variant='transparent'
      color={dark ? 'gray.2' : 'dark.8'}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    >
      {dark ? (
        <IconSun size={actualIconSize} />
      ) : (
        <IconMoonStars size={actualIconSize} />
      )}
    </ActionIcon>
  )
}
