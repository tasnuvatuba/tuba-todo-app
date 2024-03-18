import { callApi } from "./callApi"


export const addTask = () => {
    return callApi({
        url: "/add-note",
        method: "POST",
        data: task,
    })
}
