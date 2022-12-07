import { Button, useMantineColorScheme } from '@mantine/core'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'

export const Banner = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const color = dark ? 'dark' : 'gray.0'
  const backgroundColor = dark ? '#fff' : '#131415'

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles.bannerContainer}
    >
      <div className={styles.bannerContent}>
        <main
          className={styles.mainContent}
          style={{
            color: dark ? '#131415' : '#fff',
          }}
        >
          <h2>Share your ideas in a simple way</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            accumsan suscipit ex, vitae ullamcorper tellus consectetur vitae.
            Sed dictum euismod mi, eget commodo sem lobortis eu.
          </p>
          <Button
            style={{
              color: backgroundColor,
            }}
            color={color}
            size='md'
            component={Link}
            href='/dashboard'
          >
            START READING
          </Button>
        </main>

        <Image
          className={styles.illutration}
          width={560}
          height={400}
          src='/assets/illustration.svg'
          alt='Ilustration'
        />
      </div>
    </div>
  )
}
