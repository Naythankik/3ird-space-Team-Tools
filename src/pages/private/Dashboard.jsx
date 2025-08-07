import LayoutHeader from "../../components/PrivateComponent/LayoutHeader.jsx";
import OverviewCard from "../../components/PrivateComponent/cards/OverviewCard.jsx";

const Dashboard = () => {

    return (
        <>
            <LayoutHeader title="dashboard" hasSearchBar={true} />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <OverviewCard title="Tasks Completed" value="34/50">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full w-[76%]"></div>
                    </div>
                </OverviewCard>
                <OverviewCard title="Upcoming Deadlines" value="4 Due Soon" />
                <OverviewCard title="Active Projects" value="3" />
                <OverviewCard title="Team Members" value="12" />
            </section>

            <section>
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <ul className="space-y-3">
                    <li className="bg-white p-4 rounded-xl shadow-sm">✅ Jane completed "Design Update" 2h ago</li>
                    <li className="bg-white p-4 rounded-xl shadow-sm">📦 John uploaded "Marketing Assets" 5h ago</li>
                    <li className="bg-white p-4 rounded-xl shadow-sm">📢 Sarah commented on "Launch Plan" yesterday</li>
                </ul>
            </section>
        </>
    );
};

export default Dashboard;
