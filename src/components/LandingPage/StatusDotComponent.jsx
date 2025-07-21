const StatusDotComponent = () => {
    const statusDots = [
        { color: "red-400" },
        { color: "yellow-400" },
        { color: "green-400" },
    ];

    return (
        <div className="bg-gray-100 border-b border-gray-200 p-2 flex gap-2">
            {statusDots.map(({ color }, idx) => (
                <span
                    key={idx}
                    className={`h-2 w-2 rounded-full bg-${color}`}
                />
            ))}
        </div>
    )
}

export default StatusDotComponent;
