export type Item = {
    title: string;
    color: string;
}

export type ItemsState = {
    items: Item[],
    selected?: number
};

enum ItemsReducerActions {
    addItem = "Items/Reducer-Add-Item",
    removeItem = "Items/Reducer-Remove-Item",
    removeItemById = "Items/Remove-Item-By-Id",
    changeItemColor = "Items/Reducer-Change-Item-Color",
    changeItemTitle = "Items/Reducer-Change-Item-Title",
    toggleSelectedItem = "Items/Reducer-Toggle-Selected-Item",
    restore = "Items/Reducer-Restore",
}

enum ItemsSagasActions {

}

export const ItemsAction = {
    reducer: ItemsReducerActions,
    sagas: ItemsSagasActions
}