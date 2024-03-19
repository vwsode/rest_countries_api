const removeEmptyFields = (obj: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}): {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
} => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newObj: { [key: string]: any } = {};

    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            const nestedObj = removeEmptyFields(obj[key]);
            if (Object.keys(nestedObj).length !== 0) {
                newObj[key] = nestedObj;
            }
        } else if (
            obj[key] !== null &&
            obj[key] !== undefined &&
            obj[key] !== ""
        ) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
};

export default removeEmptyFields;
