import fs from "fs"
import { join, parse } from "path"
import matter from "gray-matter"
import IPerson from "../interfaces/person"
import IFieldMap from "../interfaces/field-map"
import getTitleMap from "./title-map"
import IPost from "../interfaces/post"
import IPage from "../interfaces/page"
import IPersonMap from "../interfaces/person-map"

export const CONTENT_DIR = join(process.cwd(), "_content")
export const POSTS_DIR = join(CONTENT_DIR, "posts")
export const PEOPLE_DIR = join(CONTENT_DIR, "people")
export const NEWS_DIR = join(CONTENT_DIR, "news")
export const JOBS_DIR = join(CONTENT_DIR, "jobs")
export const PUBLICATIONS_DIR = join(CONTENT_DIR, "publications")

export function getAllFiles(dir: string, ret: string[] = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const path = join(dir, file) //`${dirPath}/${file}`
    if (fs.statSync(path).isDirectory()) {
      getAllFiles(path, ret)
    } else {
      ret.push(path) //path.join(dirPath, "/", file))
    }
  })

  return ret
}

export function getAllMDFiles(dir: string): string[] {
  return getAllFiles(dir).filter(file => file.endsWith(".md"))
}

export function getFields(path: string, items: IFieldMap) {
  const fileContents = fs.readFileSync(path, "utf8")
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
    excerpt_separator: "<!-- end -->",
  })

  items["content"] = content
  items["excerpt"] = excerpt
  items["frontmatter"] = data

  //Object.assign(items, data)

  return items
}

export function getPeopleSlugs() {
  return getAllMDFiles(PEOPLE_DIR)
}

export function getPersonBySlug(path: string): IPerson {
  const p = parse(path)
  const items: IPerson = {
    index: 0,
    slug: p.name,
    titleMap: undefined,
    html: "",
    content: "",
    excerpt: "",
    frontmatter: {
      pubmed: "",
      personId: "",
      name: "",
      headshot: false,
      headerImage: false,
      postNominalLetters: "",
      titles: [],
      phone: "",
      fax: "",
      email: "",
      room: "",
      researchAreas: [],
      tags: [],
      groups: undefined,
      labs: [],
      caption: "",
      profile: "",
    },
  }

  getFields(path, items)

  items.titleMap = getTitleMap(items.frontmatter.titles)

  return items
}

export function getAllPeople(): IPerson[] {
  const slugs = getPeopleSlugs()
  const posts = slugs.map(slug => getPersonBySlug(slug))
  return posts
}

export const getPeopleMap = (people: IPerson[] = null): IPersonMap => {
  if (!people) {
    people = getAllPeople()
  }

  return Object.fromEntries(people.map(x => [x.frontmatter.name, x]))
}

export function getAllPostMDFiles() {
  return getAllMDFiles(POSTS_DIR)
}

export function getAllPosts(): IPost[] {
  const files = getAllPostMDFiles()
  const posts = files.map(path => getPostBySlug(path))
  return posts
}

export function getPostBySlug(path: string): IPost {
  const p = parse(path)
  const match = p.name.match(/(\d{4})-(\d{2})-(\d{2})/)
  const date = match ? match.slice(1, 4).join("-") : "2022-01-01"

  const items: IPost = {
    index: 0,
    slug: p.name,
    html: "",
    content: "",
    excerpt: "",
    date: date,
    frontmatter: {
      title: "",
      description: "",
      readTime: "",
      category: [],
      section: [],
      tag: [],
      related: [],
      hero: "",
      heroCaption: "",
      draft: false,
      authors: [],
    },
  }

  getFields(path, items)

  return items
}

export function getAllNewsItems(): IPost[] {
  const slugs = getAllPostMDFiles()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter(post => post.frontmatter.category.includes("News"))
  return posts
}

export function getAllJobs(): IPost[] {
  const slugs = getAllPostMDFiles()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter(post => post.frontmatter.category.includes("Jobs"))
  return posts
}

export function getPageBySlug(slug: string): IPage {
  const items: IPage = {
    index: 0,
    slug: slug.replace(".md", ""),
    html: "",
    content: "",
    excerpt: "",
  }

  getFields(join(CONTENT_DIR, slug), items)

  return items
}
