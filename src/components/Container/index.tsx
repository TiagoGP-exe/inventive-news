import { useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'
import styles from './styles.module.scss'

export type ContainerThemeProps = {
  children?: React.ReactNode
  className?: string | undefined
}

export const Container: FC<ContainerThemeProps> = ({ children, className }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <div
      style={{
        backgroundColor: dark ? '#0E0E11' : '#fff',
        color: dark ? '#fff' : '#0E0E11',
      }}
      className={`${styles.Container} ${className}`}
    >
      {children}
    </div>
  )
}
