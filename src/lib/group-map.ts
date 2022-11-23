import IGroupMap from "../interfaces/group-map"
import IPerson from "../interfaces/person"
import sortByName from "./sort-by-name"

export function getGroupMap(people: IPerson[], context = "lab"): IGroupMap {
  const gm: IGroupMap = {}

  people.forEach(person => {
    const groups = person.frontmatter.groups[context]

    groups.split(",").forEach(group => {
      group = group.trim()
      if (!(group in gm)) {
        gm[group] = []
      }

      gm[group].push(person)
    })
  })

  const ret: IGroupMap = {}

  for (let g of Object.keys(gm)) {
    ret[g] = sortByName(gm[g])
  }

  return ret
}

export default getGroupMap
