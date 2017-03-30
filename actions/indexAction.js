/**
 * Created by xiawei05 on 17/3/30.
 */
export const GET_NAME = "GET_NAME";


export function getName(name) {
    return {
        type: GET_NAME,
        name
    }
}