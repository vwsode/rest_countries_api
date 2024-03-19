const buildURLQuery = (obj: Object): string =>
    Object.entries(obj)
        .map((pair) => pair.map(encodeURIComponent).join("="))
        .join("&");

export default buildURLQuery;
