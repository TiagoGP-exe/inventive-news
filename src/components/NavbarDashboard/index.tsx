import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import {
  IconBookmarks,
  IconHome,
  IconLogout,
  IconNotes,
  IconSearch,
} from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '../Logo'
import { ItemNavbar, ItemNavbarProps } from './ItemNavbar'
import styles from './styles.module.scss'

const allItems: ItemNavbarProps[] = [
  {
    Icon: IconHome,
    url: '/dashboard',
  },
  {
    Icon: IconSearch,
    url: '/dashboard/search',
  },
  {
    Icon: IconBookmarks,
    url: '/dashboard/favorites',
  },
  {
    Icon: IconNotes,
    url: '/dashboard/my-blogs',
  },
]

export const NavDashboard = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { push, pathname } = useRouter()

  const backgroundColor = dark ? '#0E0E11' : '#fff'
  const color = dark ? '#fff' : '#000'

  return (
    <nav
      style={{
        backgroundColor: backgroundColor,
        borderRightColor: dark ? '#2E2D2D' : '#E6E6E6',
      }}
      className={styles.navHome}
    >
      <Logo />
      <div className={styles.listOfItems}>
        {allItems.map((item, index) => (
          <ItemNavbar
            key={index}
            {...item}
            pathname={pathname}
            size={32}
            color={color}
            onClick={() => push(item.url)}
          />
        ))}
      </div>
      <ActionIcon size={44} radius='md' component={Link} href='/'>
        <IconLogout size={32} />
      </ActionIcon>
    </nav>
  )
}
