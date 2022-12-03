import { Button, useMantineColorScheme } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ChangeTheme } from '../ChangeTheme'
import { Logo } from '../Logo'
import styles from './styles.module.scss'

export const HeaderHome = () => {
  const [scroll, scrollTo] = useWindowScroll()
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const color = dark ? 'dark' : 'gray.0'
  const backgroundColor = dark ? '#fff' : '#0E0E11'

  return (
    <header
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles.headerHome}
    >
      <div
        className={`${styles.contentHeaderHome} ${
          scroll.y > 0 && styles.isActived
        }`}
      >
        <Logo isReverse />

        <div className={styles.ContentAsideHeader}>
          <ChangeTheme isReverse />
          <Button variant='outline' size='md' color={color}>
            GET STARTED
          </Button>
        </div>
      </div>
    </header>
  )
}
