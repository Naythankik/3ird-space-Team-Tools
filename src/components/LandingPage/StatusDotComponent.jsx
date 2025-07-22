const StatusDotComponent = () => {
    const statusDots = [
        { color: "bg-red-400" },
        { color: "bg-yellow-400" },
        { color: "bg-green-400" },
    ];

    return (
        <div className="bg-gray-200 border-b border-gray-200 p-2 flex gap-2">
            {statusDots.map(({ color }, idx) => (
                <span
                    key={idx}
                    className={`h-2 w-2 rounded-full ${color}`}
                />
            ))}
        </div>
    )
}

export default StatusDotComponent;
