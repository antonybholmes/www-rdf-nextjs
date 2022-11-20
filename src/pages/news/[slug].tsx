import { format, parseISO } from "date-fns"
import { join } from "path"
import IPost from "../../interfaces/post"
import MarkdownLayout from "../../layouts/markdown-layout"
import { getAllNewsItems, getPostBySlug, POSTS_DIR } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

interface IProps {
  post: IPost
}

export default function Page({ post }: IProps) {
  return (
    <MarkdownLayout
      title={post.frontmatter.title}
      supertitle={format(parseISO(post.date), "LLLL d, yyyy")}
      tab="News"
      html={post.html}
    />
  )
}

interface IProps {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: IProps) {
  const post = getPostBySlug(join(POSTS_DIR, `${params.slug}.md`))

  post.html = await markdownToHtml(post.content || "")

  // const file = join(
  //   PUBLICATIONS_DIR,
  //   `${person.frontmatter.personId}-selected-publications.json`
  // )

  // let allPublications = []

  // if (existsSync(file)) {
  //   allPublications = readJsonSync(file)
  // }

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllNewsItems()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
