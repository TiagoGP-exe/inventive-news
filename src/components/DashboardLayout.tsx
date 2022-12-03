import { AppShell, MediaQuery, Navbar, useMantineTheme } from '@mantine/core'
import { FC, useState } from 'react'
import { HeaderDashboard } from './HeaderDashboard'
import { NavDashboard } from './NavbarDashboard'
import { NavBottomDashboard } from './NavBottomDashboard'
interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? '#0E0E11' : '#ffff',
            transition: 'padding 500ms ease, transform 500ms ease',
            minHeight: 'initial',
            overflow: 'hidden',
            transform: opened ? 'translateX(50%)' : 'initial',
            padding: opened ? '1rem' : 'initial',
          },

          root: {
            maxWidth: 1280,
            width: '100%',
          },
        }}
        navbar={<NavDashboard />}
      >
        <HeaderDashboard />
        <div>{children}</div>
        <NavBottomDashboard />
      </AppShell>
    </div>
  )
}
