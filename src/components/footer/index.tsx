import { useMantineColorScheme } from '@mantine/core'
import styles from './styles.module.scss'

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const backgroundColor = dark ? '#FFFFFF4D' : '#13141533'

  return (
    <footer
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles.footer}
    >
      <h3>
        Copyright © {year} TIAGO GUIMARÃES PINTO Inc. All rights reserved.
      </h3>
    </footer>
  )
}
