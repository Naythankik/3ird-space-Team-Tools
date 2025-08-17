import DashboardAside from "../../components/PrivateComponent/InAside/DashboardAside.jsx";
import DashboardComponent from "../../components/PrivateComponent/DashboardComponent.jsx";

const Dashboard = () => {

    return (
        <div className="flex divide-x h-full">
            <DashboardAside />
            <DashboardComponent />
        </div>
    );
};

export default Dashboard;
