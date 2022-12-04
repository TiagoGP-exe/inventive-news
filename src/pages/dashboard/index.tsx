import { Loader } from '@mantine/core'
import { motion, useInView } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'
import { Card } from '../../components/Card'
import { DashboardLayout } from '../../components/DashboardLayout'
import styles from './styles.module.scss'

const array = Array.from({ length: 100 }, (_, i) => i + 1)

const ifEqualZero = (num: number) => (num === 0 ? 10 : num)

const Dashboard: FC = () => {
  const [arrayTotal, setArrayTotal] = useState(array.slice(0, 10))
  const [isLoading, setIsLoading] = useState(false)

  const refreshPosts = useRef(null)
  const anotherIsInView = useInView(refreshPosts)

  useEffect(() => {
    if (anotherIsInView) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setArrayTotal(array.slice(0, arrayTotal.length + 10))
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [anotherIsInView])

  return (
    <DashboardLayout>
      {arrayTotal.map(item => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay:
              item > 10
                ? ifEqualZero(Number(String(item)[1])) * 0.3
                : item * 0.2,
            type: 'spring',
            bounce: 0,
          }}
          key={item}
        >
          <Card index={item} />
        </motion.div>
      ))}
      {isLoading && (
        <div className={styles.contentLoader}>
          <Loader size='sm' variant='dots' />
        </div>
      )}
      <div ref={refreshPosts} />
    </DashboardLayout>
  )
}

export default Dashboard
