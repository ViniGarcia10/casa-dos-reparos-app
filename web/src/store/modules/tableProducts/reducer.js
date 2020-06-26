export default function ItemSelectTable(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_SELECTED_PRODUCT':
      return [...state, action.prod];
    default:
      return state;
  }
}
