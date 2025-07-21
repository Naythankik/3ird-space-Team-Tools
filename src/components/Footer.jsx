import { Link } from "react-router-dom";
import { Twitter, InstagramIcon, FacebookIcon } from "lucide-react";

const Footer = () => {
    const navLinks = [
        {
            header: 'Product',
            links: [
                { name: 'Features', href: '/#features' },
                { name: 'Pricing', href: '/#pricing' },
                { name: 'Integrations', href: '#' },
                { name: 'Updates', href: '#' }
            ]
        },
        {
            header: 'Company',
            links: [
                { name: 'About', href: '/#about' },
                { name: 'Blog', href: '/#blog' },
                { name: 'Careers', href: '/#careers' },
                { name: 'Press', href: '/#press' }
            ]
        },
        {
            header: 'Support',
            links: [
                { name: 'Help Center', href: '/#help-center' },
                { name: 'Documentation', href: '/#documentation' },
                { name: 'Guides', href: '/#guides' },
                { name: 'Contact Us', href: '/#contact-us' }
            ]
        }
    ];

    return (
        <footer className="py-12 bg-white shadow-inner">
            <div className="w-[95%] lg:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-16">
                {/* Branding & Socials */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <Link to="/" className="flex items-center gap-2">
                        <svg className="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <p className="text-lg font-bold">3irdSpace</p>
                    </Link>
                    <p className="text-gray-500 text-sm">
                        Streamline your team's workflow with our intuitive project and task management platform.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="text-gray-600 hover:text-pink-500 cursor-pointer" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="text-gray-600 hover:text-blue-700 cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    {navLinks.map(({ header, links }, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="uppercase text-gray-400 font-semibold">{header}</p>
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="text-gray-600 text-base hover:text-indigo-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[95%] lg:w-[75%] mx-auto mt-12 text-center text-sm text-gray-400 border-t pt-6">
                &copy; {new Date().getFullYear()} 3irdSpace. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
