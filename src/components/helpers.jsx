const TextError = ({message, pos = 'text-center'}) => {
    return <p className={`text-red-500 text-sm my-1 ${pos}`}>{message}</p>;
}

const TextSuccess = ({message}) => {
    return <p className="text-green-500 text-sm text-center">{message}</p>;
}
export { TextError, TextSuccess }
