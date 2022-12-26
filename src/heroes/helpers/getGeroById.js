import { heroes } from "../data/heroes"


export const getGeroById = (id) => {

    return heroes.find(hero => hero.id === id)

}
