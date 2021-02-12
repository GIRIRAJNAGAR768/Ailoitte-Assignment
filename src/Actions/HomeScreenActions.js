export const dummyAction = (action) => {
    return {
        type: "DummyAction",
        payload: action.payload
    }
}