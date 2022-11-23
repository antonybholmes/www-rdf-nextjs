import PeoplePage from "../../components/people/people-page"

import IPerson from "../../interfaces/person"
import { getAllPeople } from "../../lib/api"

interface IProps {
  allPeople: IPerson[]
}

export default function Page({ allPeople }: IProps) {
  return <PeoplePage title="Administrative Staff" allPeople={allPeople} />
}

export const getStaticProps = async () => {
  const allPeople = getAllPeople().filter(person =>
    person.frontmatter.groups["lab"].includes("Administrative Staff")
  )

  return {
    props: { allPeople },
  }
}
