import { ActionIcon, Button, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
  IconBookmarks,
  IconHome,
  IconNotes,
  IconPlus,
  IconSearch,
} from '@tabler/icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { verifyUrl } from '../../utils/url'
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
  const backgroundColor = dark ? '#131415' : '#fff'
  const color = dark ? '#fff' : '#000'
  const match = useMediaQuery('(min-width: 420px)')

  return (
    <nav
      style={{
        backgroundColor: backgroundColor,
        borderTopColor: dark ? '#2E2D2D' : '#E6E6E6',
      }}
      className={`${styles.navBottom} ${dark ? styles.dark : styles.light}`}
    >
      <ActionIcon
        size='md'
        color={dark ? 'gray.0' : 'dark'}
        radius='xl'
        variant='filled'
        className={styles.addButton}
      >
        <IconPlus color={backgroundColor} stroke={2.5} />
      </ActionIcon>
      {allItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
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
            size={match ? 32 : 24}
            color={color}
            onClick={() => push(item.url)}
          />
        </motion.div>
      ))}
    </nav>
  )
}
