import { format, parseISO } from "date-fns"
import BlackLink from "../components/link/black-link"
import BlueIndexLink from "../components/link/blue-index-link"
import ToBlueLink from "../components/link/to-blue-link"
import MarkdownBody from "../components/markdown-body"
import { RECORDS_PER_PAGE } from "../constants"
import IDataPageProps from "../interfaces/data-page-props"
import IPost from "../interfaces/post"
import SideLayout from "./side-layout"

interface IProps extends IDataPageProps {
  title: string
  posts: IPost[]
}

export default function PostsLayout({ title, posts }: IProps) {
  const pages = Math.floor(
    (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  )

  return (
    <SideLayout title={title}>
      <ul className="mt-8 flex flex-col gap-y-8">
        {posts.map((post: any, index: number) => {
          const url = `/${title.toLowerCase()}/${post.slug}`
          return (
            <li key={index} className="flex flex-col gap-y-2">
              <div className="text-sm">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </div>
              <BlackLink href={url} ariaLabel="View article">
                <h2 className="text-2xl font-semibold lg:text-3xl">
                  {post.frontmatter.title}
                </h2>
              </BlackLink>
              <MarkdownBody html={post.excerpt} />
              <BlueIndexLink
                href={url}
                ariaLabel="View article"
                className="font-semibold"
              >
                Read more
              </BlueIndexLink>
            </li>
          )
        })}
      </ul>
      <></>
    </SideLayout>
  )
}
