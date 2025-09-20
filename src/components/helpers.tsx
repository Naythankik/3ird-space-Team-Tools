type TextErrorProps = {
    message: string;
    pos?: string;
};

const TextError = ({ message, pos = "text-center" }: TextErrorProps) => {
    return <p className={`text-red-500 text-sm my-1 ${pos}`}>{message}</p>;
};

type TextSuccessProps = {
    message: string;
};

const TextSuccess = ({ message }: TextSuccessProps) => {
    return <p className="text-green-500 text-sm text-center">{message}</p>;
};

export { TextError, TextSuccess };
