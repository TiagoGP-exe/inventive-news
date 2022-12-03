import { ActionIcon } from '@mantine/core'
import { TablerIcon } from '@tabler/icons'
import { FC } from 'react'

export interface ItemNavbarProps {
  size?: number
  Icon: TablerIcon
  url: string
  onClick?: () => void
  pathname?: string
  color?: string
}

export const ItemNavbar: FC<ItemNavbarProps> = ({
  size = 36,
  Icon,
  onClick,
  url,
  pathname,
  color,
}) => {
  const numberOfBar = url.lastIndexOf('/')
  const urlWithoutBar = url.slice(numberOfBar)
  const isActive = pathname === urlWithoutBar

  console.log('pathname', pathname)

  return (
    <ActionIcon onClick={onClick} radius='md' size={size + 12}>
      <Icon size={size} opacity={isActive ? 1 : 0.3} color={color} />
    </ActionIcon>
  )
}
