import { GetStaticProps } from 'next'
import useSWR from 'swr'
import axios from 'axios'

import Layout from '../components/Layout'
import { getAllTasksData } from '../lib/fetch'
import { TASK } from '../types/Types'

interface STATICPROPS {
  staticTasks: TASK[]
}

const TaskPage: React.FC = () => {
  return (
    <Layout title="Todos">
      <p className="text-4xl">todos page</p>
    </Layout>
  )
}
export default TaskPage
