import { ActionIcon, Avatar, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons'
import { ChangeTheme } from '../ChangeTheme'
import styles from './styles.module.scss'

export const HeaderDashboard = () => {
  const { colorScheme } = useMantineColorScheme()
  const matches = useMediaQuery('(min-width: 768px)')
  const dark = colorScheme === 'dark'
  const color = dark ? '#fff' : '#000'
  const backgroundColor = dark ? '#0E0E11' : '#fff'

  const avatar = 'assets/photo-1.png'

  return (
    <header
      style={{
        backgroundColor: backgroundColor,
        borderBottomColor: dark ? '#2E2D2D' : '#E6E6E6',
      }}
      className={styles.headerHome}
    >
      <div className={`${styles.contentHeaderHome} `}>
        {matches && (
          <ActionIcon>
            <IconPlus />
          </ActionIcon>
        )}

        <div className={styles.avatarContainer}>
          <ChangeTheme />
          <div className={styles.avatarAndText}>
            <Avatar
              style={{
                borderColor: color,
              }}
              styles={{
                root: {
                  backgroundColor: color,
                },
              }}
              className={styles.avatarBorder}
              size='md'
              radius='md'
              src={avatar}
            >
              Pamela Currey
            </Avatar>
            <div className={styles.avatarContent}>
              <p> Welcome back</p>
              <h3> Pamela Currey</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
