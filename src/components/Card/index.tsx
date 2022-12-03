import {
  ActionIcon,
  Avatar,
  Chip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBookmark } from '@tabler/icons'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from './styles.module.scss'

export const Card = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const color = dark ? '#fff' : '#000'
  const [isFavorite, setIsFavorite] = useState(false)

  const match = useMediaQuery('(min-width: 768px)')

  const { colors } = useMantineTheme()

  const avatar = 'assets/photo-1.png'

  return (
    <div
      className={styles.cardContainer}
      style={{
        borderBottomColor: dark ? '#2E2D2D' : '#E6E6E6',
      }}
    >
      <div className={styles.cardContent}>
        <main>
          <div className={styles.cardHeader}>
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
            />
            <div className={styles.cardHeaderContent}>
              <h3> Pamela Currey</h3>
              <p> 2 days ago</p>
            </div>
          </div>
          <h2>
            3 platforms I used as beginner to earn money from my blog posts!
          </h2>
          <p>
            I knew very less about blogging, making websites, and earning money
            from there 4 months back. I have not at all generated huge revenue
            but...
          </p>

          <div className={styles.bottomCardContent}>
            <div className={styles.HStack}>
              <Chip color='blue' variant='filled' size='md' radius='md'>
                tags
              </Chip>

              <p>4 · min read</p>
            </div>

            <ActionIcon
              onClick={() => setIsFavorite(e => !e)}
              color='blue.5'
              variant={isFavorite ? 'light' : 'transparent'}
            >
              <IconBookmark
                fillOpacity={isFavorite ? 1 : 0}
                fill={colors.blue[5]}
              />
            </ActionIcon>
          </div>
        </main>
        {match && (
          <Image
            style={{
              borderColor: color,
            }}
            className={`${styles.avatarBorder} ${styles.imageCard}`}
            src='https://placeimg.com/640/480/any'
            alt='Picture of the author'
            width={230}
            height={230}
          />
        )}
      </div>
    </div>
  )
}
