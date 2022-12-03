import { Avatar } from '@mantine/core/'
import { FC } from 'react'
import styles from './styles.module.scss'

export interface ItemTrendingProps {
  position: number
  name: string
  avatar?: string
  title: string
  description: string
}

export const ItemTrending: FC<ItemTrendingProps> = ({
  avatar,
  description,
  name,
  position,
  title,
}) => {
  const color =
    position === 1 ? '#F89F37' : position === 2 ? '#ACACAC' : '#B86D17'

  return (
    <div className={styles.ItemTrendingContainer}>
      <header className={styles.ItemTrendingHeader}>
        <h2
          style={{
            color,
          }}
        >
          {position}º
        </h2>
        <Avatar
          className={styles.avatarBorder}
          size='md'
          radius='md'
          src={avatar}
        >
          {name}
        </Avatar>
        <h3>{name}</h3>
      </header>
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  )
}
