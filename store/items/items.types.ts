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
    changeItemColor = "Items/Reducer-Change-Item-Color",
    toggleSelectedItem = "Items/Reducer-Toggle-Selected-Item",
}

enum ItemsSagasActions {

}

export const ItemsAction = {
    reducer: ItemsReducerActions,
    sagas: ItemsSagasActions
}