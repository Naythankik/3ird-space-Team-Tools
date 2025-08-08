export default function randomString(length = 5) {
    return [...Array(length)].map(_ => (Math.random() * 1000000).toString(36).replace('.', '')).join('');
}
