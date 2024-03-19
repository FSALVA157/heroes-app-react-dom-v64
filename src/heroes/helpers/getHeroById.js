import { heroes } from "../data/heroes"



export const getHeroById = ({id}) => {
  console.log("ejecutando getHeroById")
  return heroes.find(hero => hero.id === id);
}
