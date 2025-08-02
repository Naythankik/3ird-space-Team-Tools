import React, { useState } from "react";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Header />
            <section className="py-20 px-6 md:px-16 bg-white text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
                        Contact Us
                    </h1>
                    <p className="text-center text-lg text-gray-600 mb-8">
                        Have questions, feedback, or need help? We'd love to hear from you.
                    </p>

                    <form onSubmit={handleSubmit} className="grid gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>            <Footer />
        </main>
    );
};

export default Contact;
