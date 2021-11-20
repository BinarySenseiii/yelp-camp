export const uuid = () => {
    let dt = new Date().getTime()

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            const rand = (dt + Math.random() * 16) % 16 | 0
            dt = Math.floor(dt / 16)
            return (c === 'x' ? rand : (rand & 0x3) | 0x8).toString(16)
        }
    )
}
