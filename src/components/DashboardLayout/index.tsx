import { AppShell, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { FC } from 'react'
import { HeaderDashboard } from '../HeaderDashboard'
import { NavDashboard } from '../NavbarDashboard'
import { NavBottomDashboard } from '../NavBottomDashboard'
import styles from './styles.module.scss'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const theme = useMantineTheme()

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const color = dark ? '#fff' : '#000'
  const backgroundColor = dark ? '#131415' : '#fff'

  return (
    <AppShell
      fixed
      classNames={{
        root: styles.dashboardLayoutContainer,
        main: styles.dashboardLayoutContent,
      }}
      styles={{
        main: {
          backgroundColor: backgroundColor,
          maxWidth: 1120,
          padding: 0,
        },
      }}
      navbar={<NavDashboard />}
    >
      <div className={styles.dashboardLayout}>
        <HeaderDashboard />
        <div className={styles.dashboardLayoutChildren}>{children}</div>
        <NavBottomDashboard />
      </div>
    </AppShell>
  )
}
