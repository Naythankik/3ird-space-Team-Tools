import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type FeatureProps = {
    title: string;
    description: string;
    icon: string;
}

const features: FeatureProps[] = [
    {
        title: "Customizable Workflows",
        description:
            "Tailor your team's processes with flexible workflows that match how you work — from kanban boards to sprint planning.",
        icon: "⚙️",
    },
    {
        title: "Real-Time Collaboration",
        description:
            "Stay in sync with teammates using instant updates, task mentions, and centralized feedback.",
        icon: "🧑‍🤝‍🧑",
    },
    {
        title: "Project Visibility",
        description:
            "Gain clear insights into tasks, deadlines, and progress with visual dashboards and reporting tools.",
        icon: "📊",
    },
    {
        title: "Seamless Integrations",
        description:
            "Connect with tools your team already uses — like Slack, Google Drive, and GitHub — to keep everything in one place.",
        icon: "🔌",
    },
    {
        title: "Secure & Scalable",
        description:
            "Built with enterprise-grade security and the flexibility to scale with your team as you grow.",
        icon: "🔐",
    },
    {
        title: "Mobile Ready",
        description:
            "Stay productive on the go with a fully responsive design and mobile app support.",
        icon: "📱",
    },
];

const FeaturesPage = () => {
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Header />
            <section className="py-20 px-6 md:px-16 bg-gray-50 text-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Powerful Features to Supercharge Your Team</h1>
                    <p className="text-lg text-gray-600 mb-12">
                        Everything you need to manage projects, collaborate efficiently, and deliver results — all in one place.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default FeaturesPage;
