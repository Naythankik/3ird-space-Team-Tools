const ProgressBar = ({ title, value }) => {
    return (
        <div className="grid gap-1 my-5">
            <div className="flex justify-between items-center text-gray-800 font-medium">
                <label htmlFor="progress">{title}</label>
                <span>{value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${value}` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
