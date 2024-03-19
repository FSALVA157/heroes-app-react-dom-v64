import { heroes } from "../data/heroes"



export const getHeroByName = ({name=""}) => {
  const text = name.toLowerCase().trim();  
  if(text.lenght === 0) return [];
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(text));
}
