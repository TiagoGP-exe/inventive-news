import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import {
  IconBookmarks,
  IconHome,
  IconLogout,
  IconNotes,
  IconSearch,
} from '@tabler/icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { verifyUrl } from '../../utils/url'
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
        borderRightColor: dark ? '#2E2D2D' : '#E6E6E6',
      }}
      className={styles.navHome}
    >
      <Logo />
      <div className={styles.listOfItems}>
        {allItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: verifyUrl(item.url, pathname) ? 0 : 0.3,
              duration: 0.8,
              type: 'spring',
              bounce: 0,
            }}
          >
            <ItemNavbar
              {...item}
              pathname={pathname}
              size={32}
              color={color}
              onClick={() => push(item.url)}
            />
          </motion.div>
        ))}
      </div>
      <ActionIcon size={44} radius='md' component={Link} href='/'>
        <IconLogout size={32} />
      </ActionIcon>
    </nav>
  )
}
