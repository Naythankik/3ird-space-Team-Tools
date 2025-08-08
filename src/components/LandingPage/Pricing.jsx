import { CheckCircle2Icon } from "lucide-react";
import {useState} from "react";

const Pricing = () => {
    const pricings = [
        {
            title: 'Free',
            button: 'Get Started',
            description: 'Great for individuals or small teams getting started.',
            price: 0,
            features: [
                'Unlimited projects',
                'Unlimited tasks',
                'Unlimited team members',
                'Unlimited collaborators',
                'Unlimited notifications',
                'Unlimited file sharing',
            ]
        },
        {
            title: 'Starter',
            description: 'Perfect for small teams just getting started.',
            price: 9,
            button: 'Start free trial',
            features: [
                'Up to 5 team members',
                'Up to 3 projects',
                'Basic task management',
                '5GB storage'
            ]
        },
        {
            title: 'Professional',
            description: 'For growing teams that need more features.',
            price: 19,
            button: 'Start free trial',
            features: [
                'Unlimited team members',
                'Unlimited projects',
                'Advanced task management',
                '50GB storage',
                'Custom workflows',
                'Advanced reporting'
            ]
        },
        {
            title: 'Enterprise',
            description: 'For large organizations with specific needs.',
            price: 49,
            button: 'Contact sales',
            features: [
                'Everything in Professional',
                'Unlimited storage',
                'Dedicated account manager',
                '24/7 premium support',
                'Custom integrations',
                'Advanced security features'
            ]
        }
    ];

    const [selectedPrice, setSelectedPrice] = useState(2);

    return (
        <section id="pricing" className="py-14 md:y-28 bg-white">
            <div className="flex flex-col items-center text-center gap-4 w-[95%] lg:w-[75%] mx-auto">
                <h2 className="font-semibold text-4xl">Simple, transparent pricing</h2>
                <p className="text-gray-500 w-full md:w-3/5 text-center text-xl">
                    Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
                    {pricings.map(({ title, description, price, button, features }, idx) => {
                        const isSelected = idx === selectedPrice;
                        return (
                            <div
                                key={idx}
                                role="button"
                                aria-pressed={isSelected}
                                tabIndex={0}
                                onClick={() => setSelectedPrice(idx)}
                                onKeyDown={(e) => e.key === "Enter" && setSelectedPrice(idx)}
                                className={`flex flex-col gap-5 cursor-pointer rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 border ${
                                    isSelected ? "border-indigo-600 border-2" : "border-gray-200"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            >
                                {/* Title & Description */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                                    <p className="text-sm text-gray-500">{description}</p>
                                </div>

                                {/* Price */}
                                <div className="text-3xl md:text-4xl font-bold">
                                    ${price}
                                    <span className="text-base font-normal text-gray-500">/month per user</span>
                                </div>

                                {/* Action Button */}
                                <button
                                    type="button"
                                    className={`w-full py-2 rounded-md font-medium cursor-pointer transition ${
                                        isSelected
                                            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                                            : "border text-indigo-700 border-indigo-500 bg-indigo-100 hover:opacity-85"
                                    }`}
                                >
                                    {button}
                                </button>

                                {/* What's Included */}
                                <p className="font-medium mt-2">WHAT'S INCLUDED</p>
                                <ul className="flex flex-col gap-2">
                                    {features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2Icon size={20} className="fill-green-400 text-white flex-shrink-0" />
                                            <span className="text-base break-words">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
