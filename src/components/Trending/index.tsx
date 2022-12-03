import { IconTrendingUp } from '@tabler/icons'
import { ItemTrending, ItemTrendingProps } from './ItemTrending'
import styles from './styles.module.scss'

const fakeData: ItemTrendingProps[] = [
  {
    name: 'Pamela Currey',
    title: 'How to make a website',
    position: 1,
    description: 'Nov 14 · 7 min read',
    avatar: 'assets/photo-1.png',
  },
  {
    name: 'Davy Poe',
    title: 'Angular v15 is now available!',
    position: 2,
    description: 'Nov 10 · 7 min read',
    avatar: 'assets/photo-2.png',
  },
  {
    name: 'Linden Andrus',
    title: 'Using Rust at a startup A cautionary tale',
    position: 3,
    description: 'Nov 08 · 15 min read',
    avatar: 'assets/photo-3.png',
  },
]

export const Trending = () => {
  return (
    <div className={styles.containerTreding}>
      <div className={styles.contentTreding}>
        <header className={styles.TredingHeader}>
          <IconTrendingUp size={28} />
          <h2>Trending</h2>
        </header>

        <div className={styles.listTrending}>
          {fakeData.map(item => (
            <ItemTrending key={item.position} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
