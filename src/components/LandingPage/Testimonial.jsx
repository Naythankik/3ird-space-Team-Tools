import { StarIcon } from "lucide-react";

const Testimonial = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            info: 'Marketing Director, Acme Inc.',
            image:
                'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=60',
            comment:
                "3irdSpace has transformed how our marketing team collaborates. We've reduced meeting time by 30% and increased our campaign output. The intuitive interface made adoption across the team seamless.",
        },
        {
            name: 'Michael Chen',
            info: 'Product Manager, TechStart',
            image:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=60',
            comment:
                "As a product manager, I need visibility across multiple projects. 3irdSpace gives me that at a glance. The customizable workflows have been a game-changer for our development sprints.",
        },
        {
            name: 'Emily Rodriguez',
            info: 'Team Lead, DesignCo',
            image:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60',
            comment:
                "Our design team was struggling with project handoffs and version control. 3irdSpace solved both problems. Now we have a single source of truth for all our design projects and client feedback.",
        },
    ];

    return (
        <section id="testimonials" className="py-28 bg-white">
            <div className="flex flex-col items-center text-center gap-4 w-[95%] lg:w-[75%] mx-auto">
                <h2 className="font-semibold text-4xl">Loved by teams worldwide</h2>
                <p className="text-gray-500 w-full md:w-3/5 text-center text-xl">See what our customers have to say about 3irdSpace.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
                    {testimonials.map(({ name, info, comment, image }, idx) => (
                        <article key={idx} className="flex flex-col gap-4 shadow-lg shadow-blue-100 p-4 rounded-lg border border-gray-300">
                            <div className="flex items-center gap-4">
                                <img src={image} alt="" className="h-12 w-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-lg">{name}</p>
                                    <p className="text-gray-500 font-normal text-sm">{info}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 flex-row">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-gray-500">{`"${comment}"`}</blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
