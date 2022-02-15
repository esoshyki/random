import { State } from '../../types'

const items = (state: State) => state.items.items;
const selected = (state: State) => state.items.selected;

export const itemsSelector = {
    items,
    selected
}