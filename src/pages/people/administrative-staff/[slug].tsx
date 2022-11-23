import { join } from "path"
import PersonPage from "../../../components/people/person-page"
import IPerson from "../../../interfaces/person"
import { getAllPeople, getPersonBySlug, PEOPLE_DIR } from "../../../lib/api"
import markdownToHtml from "../../../lib/markdownToHtml"

interface IProps {
  person: IPerson
}

export default function Page({ person }: IProps) {
  return <PersonPage person={person} />
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const person = getPersonBySlug(join(PEOPLE_DIR, `${params.slug}.md`))

  person.html = await markdownToHtml(person.content || "")

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
      person,
    },
  }
}

export async function getStaticPaths() {
  const people = getAllPeople().filter(person =>
    person.frontmatter.groups["lab"].includes("Administrative Staff")
  )

  return {
    paths: people.map(person => {
      return {
        params: {
          slug: person.frontmatter.personId,
        },
      }
    }),
    fallback: false,
  }
}
