import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type HelpTopicState = {
    category: string;
    articles: string[];
}

const helpTopics: HelpTopicState[] = [
    {
        category: "Getting Started",
        articles: [
            "How to create a 3irdSpace account",
            "Setting up your first project",
            "Understanding the dashboard",
        ],
    },
    {
        category: "Team Collaboration",
        articles: [
            "Inviting and managing team members",
            "Assigning tasks and roles",
            "Using comments and mentions",
        ],
    },
    {
        category: "Project Management",
        articles: [
            "Creating and customizing workflows",
            "Tracking project progress",
            "Archiving or deleting a project",
        ],
    },
    {
        category: "Billing & Subscriptions",
        articles: [
            "Updating your billing info",
            "Free trial vs. paid plans",
            "Canceling your subscription",
        ],
    },
    {
        category: "Security & Data",
        articles: [
            "How we keep your data safe",
            "Two-factor authentication",
            "Exporting your project data",
        ],
    },
];

const HelpCenter = () => {
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Header />
            <section className="py-20 px-6 md:px-16 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                    Help Center
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Find answers to common questions and learn how to get the most out of 3irdSpace.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {helpTopics.map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-4">{section.category}</h3>
                            <ul className="space-y-2">
                                {section.articles.map((article, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-700 hover:text-indigo-500 transition duration-150 cursor-pointer"
                                    >
                                        {article}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            </section>
            <Footer />
        </main>
    );
};

export default HelpCenter;
