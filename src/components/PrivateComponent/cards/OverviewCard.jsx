const OverviewCard = ({ title, value, children }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-full">
            <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
            <p className="text-2xl font-semibold mb-2">{value}</p>
            {children}
        </div>
    )
}

export default OverviewCard;
