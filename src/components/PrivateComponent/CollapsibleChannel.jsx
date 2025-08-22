import {ChevronDown, ChevronRight, Hash, Lock, Plus} from "lucide-react";
import React, {useState} from "react";

const CollapsibleChannel = ({ children, readChannel, activeChannel }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center w-full text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 focus:outline-none">
                {isOpen ? <ChevronDown size={16} className="mr-1"/> : <ChevronRight size={16} className="mr-1"/>}
                Channel
            </button>
            {isOpen && <div className="space-y-1">
                {children.map((child, idx) => (
                    <button
                        type="button"
                        key={idx}
                        onClick={() => readChannel(child.slug)}
                        className={`flex items-center w-full justify-between px-3 py-1.5 rounded-md text-sm transition-colors duration-200 
                        ${activeChannel === child.slug ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white'}`}
                    >
                        <div className="flex items-center space-x-2">
                            {child.isPrivate ?
                                <Lock size={16} /> : <Hash size={16} />
                            }
                            <span>{child.slug}</span>
                        </div>
                        {child.isArchived && <span
                            className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">{child?.isArchived}</span>}
                    </button>))}
                <button className="flex items-center w-full px-3 py-1.5 text-sm text-gray-400 hover:text-white">
                    <Plus size={16} className="mr-2"/>
                    Add channel
                </button>
            </div>}

        </div>);
}

export default CollapsibleChannel;
