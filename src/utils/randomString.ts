export default function randomString(length: number = 5): string {
    return [...Array(length)]
        .map(() => (Math.random() * 1000000).toString(36).replace(".", ""))
        .join("");
}
