import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Header />
            <section className="py-20 px-6 md:px-16 bg-white text-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">About 3irdSpace</h1>
                    <p className="text-lg leading-7 mb-4">
                        At 3irdSpace, our mission is simple to streamline your team's workflow with a powerful yet intuitive
                        project and task management platform.
                    </p>
                    <p className="text-lg leading-7 mb-4">
                        Founded with a passion for collaboration and productivity, we've built a tool that empowers teams to reduce
                        meeting time, improve visibility across projects, and make better decisions faster. Whether you're managing
                        design feedback, sprint planning, or campaign execution, 3irdSpace helps you stay aligned and move forward.
                    </p>
                    <p className="text-lg leading-7 mb-4">
                        Trusted by teams of all sizes, from startups to enterprises, we're on a journey to redefine how modern teams
                        work together.
                    </p>
                    <p className="text-lg font-medium text-indigo-600 mt-8">
                        Ready to experience the future of team collaboration? Join thousands of users already transforming their workflows.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default About;
