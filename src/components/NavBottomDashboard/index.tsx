import { useMantineColorScheme } from '@mantine/core'
import { IconBookmarks, IconHome, IconNotes, IconSearch } from '@tabler/icons'
import { useRouter } from 'next/router'
import { ItemNavbar, ItemNavbarProps } from '../NavbarDashboard/ItemNavbar'
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

export const NavBottomDashboard = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { push, pathname } = useRouter()
  const backgroundColor = dark ? '#0E0E11' : '#fff'
  const color = dark ? '#fff' : '#000'

  return (
    <nav
      style={{
        backgroundColor: backgroundColor,
        borderTopColor: dark ? '#2E2D2D' : '#E6E6E6',
      }}
      className={styles.navBottom}
    >
      {allItems.map((item, index) => (
        <ItemNavbar
          key={index}
          {...item}
          pathname={pathname}
          size={28}
          color={color}
          onClick={() => push(item.url)}
        />
      ))}
    </nav>
  )
}
