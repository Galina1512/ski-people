export const paginationData = (data, size) => {
    const paginationSized = [];

    for (let i = 1; i < data.length; i += size ) {
        paginationSized.push(data.slice(i, i + size));
    }

    return paginationSized;
}