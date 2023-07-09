export function getItemsById(id: any, array: string | any[]) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            result.push(array[i]);
        }
    }
    return result;
}