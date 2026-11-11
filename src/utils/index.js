export const deepFreeze = (obj) => {
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        const value = obj[prop]
        if (value && typeof value === 'object') deepFreeze(value)
    })
    return Object.freeze(obj)
}