import { State } from '../../types'

const items = (state: State) => state.items.items;

export const itemsSelector = {
    items
}