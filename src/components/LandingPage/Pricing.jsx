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
        <section id="pricing" className="py-28 bg-white">
            <div className="flex flex-col items-center gap-4 w-[95%] lg:w-[75%] mx-auto">
                <h2 className="font-semibold text-4xl">Simple, transparent pricing</h2>
                <p className="text-gray-500 w-3/5 text-center text-xl">
                    Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {pricings.map(({ title, description, price, button, features }, idx) => (
                        <div
                            onClick={() => setSelectedPrice(idx)}
                            key={idx}
                            className={`flex flex-col gap-5 cursor-pointer border ${idx === selectedPrice ? 'border-indigo-600 border-2' : 'border-gray-200'} rounded-xl p-6 shadow hover:shadow-xl transition`}
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-sm text-gray-500">{description}</p>
                            </div>

                            <div className="text-4xl font-bold">
                                ${price}
                                <span className="text-base font-normal text-gray-500">/month per user</span>
                            </div>

                            <button className={`w-full ${idx === selectedPrice ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:opacity-90' : 'border text-indigo-700 border-indigo-500 bg-indigo-100 hover:opacity-85'} py-2 rounded-md font-medium cursor-pointer`}>
                                {button}
                            </button>

                            <p className="font-medium">WHAT'S INCLUDED</p>
                            <ul className="flex flex-col gap-2">
                                {features.map((feat, i) => (
                                    <li key={i} className="text-gray-700 text-sm flex gap-3">
                                        <CheckCircle2Icon className="fill-green-400 text-white" /> {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
