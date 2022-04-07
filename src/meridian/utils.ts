export const bytesToSize = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 B';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

export const removeDuplicatesFromArray = <T>(array: T[]) =>
    Array.from(new Set(array));

export const truncateLongText = (text: string, maxLength: number = 30) => {
    return text.length < maxLength ? text : `${text.slice(0, maxLength - 3)}...`
}