import IPost from "../interfaces/post"
import PostsLayout from "../layouts/posts-layout"
import { getAllNewsItems } from "../lib/api"

interface IProps {
  allNewsItems: IPost[]
}

export default function Page({ allNewsItems }: IProps) {
  return <PostsLayout title="News" posts={allNewsItems} />
}

export const getStaticProps = async () => {
  const allNewsItems = getAllNewsItems()

  return {
    props: { allNewsItems },
  }
}
