import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type BlogPostState = {
    title: string;
    date: string;
    author: string;
    summary: string;
}

const blogPosts: BlogPostState[] = [
    {
        title: "5 Ways to Boost Team Productivity Using 3irdSpace",
        date: "July 18, 2025",
        author: "Alex Morgan",
        summary: "Discover practical tips for using 3irdSpace to increase your team's productivity and reduce meeting overload.",
    },
    {
        title: "How We Designed a Better Workflow Experience",
        date: "June 30, 2025",
        author: "Nina Patel",
        summary: "Go behind the scenes of our latest UI update and learn how we redesigned workflows to be more intuitive.",
    },
    {
        title: "3irdSpace Now Integrates with Google Calendar",
        date: "June 10, 2025",
        author: "Product Team",
        summary: "You can now sync tasks and deadlines with Google Calendar here’s how to set it up and make the most of it.",
    },
];

const Blog = () => {
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Header />
            <section className="py-20 px-6 md:px-16 bg-white text-gray-800">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                    Insights & Updates from 3irdSpace
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Tips, news, and stories to help you collaborate better and stay in the loop.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
                        >
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">
                                {post.date} &middot; {post.author}
                            </p>
                            <p className="text-gray-700 mb-4">{post.summary}</p>
                            <button className="text-indigo-600 font-medium hover:underline">
                                Read more →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            </section>
            <Footer />
        </main>

    );
};

export default Blog;
