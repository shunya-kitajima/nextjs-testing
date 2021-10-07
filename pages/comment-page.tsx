import Layout from '../components/Layout'
import useSWR from 'swr'
import axios from 'axios'

import Comment from '../components/Comment'

const CommentPage: React.FC = () => {
  return (
    <Layout title="Comment">
      <p className="text-4xl">comment page</p>
    </Layout>
  )
}
export default CommentPage
