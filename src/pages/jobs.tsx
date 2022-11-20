import IPost from "../interfaces/post"
import PostsLayout from "../layouts/posts-layout"
import { getAllJobs } from "../lib/api"

interface IProps {
  allNewsItems: IPost[]
}

export default function Page({ allNewsItems }: IProps) {
  return <PostsLayout title="Jobs" posts={allNewsItems} />
}

export const getStaticProps = async () => {
  const allNewsItems = getAllJobs()

  return {
    props: { allNewsItems },
  }
}
