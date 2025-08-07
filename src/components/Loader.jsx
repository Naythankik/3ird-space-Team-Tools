const Loader = () => {
    return (
        <section
            className="bg-white/90 bg-blend-soft-light min-h-screen flex flex-col justify-center items-center"
            aria-label="Loading content"
        >
            <div className="w-36 h-36 rounded-full border-4 border-l-0 border-b-0 border-indigo-500 animate-spin duration-2000"></div>
            <p className="mt-4 text-indigo-500 font-medium">Loading...</p>

        </section>
    );
};

export default Loader;
