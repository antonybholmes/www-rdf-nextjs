import IPost from "../interfaces/post"
import PostsLayout from "../layouts/posts-layout"
import { getAllPosts } from "../lib/api"

interface IProps {
  allPosts: IPost[]
}

export default function Page({ allPosts }: IProps) {
  return <PostsLayout title="Blog" posts={allPosts} />
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}
