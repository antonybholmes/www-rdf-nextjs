import IBaseMarkdown from "./base-markdown"
import IPostFields from "./post-fields"

export default interface IPost extends IBaseMarkdown {
  date: string
  frontmatter: IPostFields
}
