import { motion, useInView } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'
import { Card } from '../../components/Card'
import { DashboardLayout } from '../../components/DashboardLayout'
const array = Array.from({ length: 100 }, (_, i) => i + 1)

const Dashboard: FC = () => {
  const [arrayTotal, setArrayTotal] = useState(array.slice(0, 10))

  const refreshPosts = useRef(null)
  const anotherIsInView = useInView(refreshPosts)

  useEffect(() => {
    if (anotherIsInView) {
      setArrayTotal(array.slice(0, arrayTotal.length + 10))
    }
  }, [anotherIsInView])

  return (
    <DashboardLayout>
      {arrayTotal.map(item => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: item * 0.05,
            type: 'spring',
            bounce: 0,
          }}
          key={item}
        >
          <Card />
        </motion.div>
      ))}

      <div ref={refreshPosts} />
    </DashboardLayout>
  )
}

export default Dashboard
