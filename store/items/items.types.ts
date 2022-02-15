export type Item = {
    title: string;
    color: string;
}

export type ItemsState = {
    items: Item[]
}

enum ItemsReducerActions {
    addItem = "Items/Reducer-Add-Item",
    removeItem = "Items/Reducer-Remove-Item",
}

enum ItemsSagasActions {

}

export const ItemsAction = {
    reducer: ItemsReducerActions,
    sagas: ItemsSagasActions
}