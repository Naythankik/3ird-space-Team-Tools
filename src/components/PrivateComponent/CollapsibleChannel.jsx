import {ChevronDown, ChevronRight, Hash, Plus} from "lucide-react";
import React, {useState} from "react";

const CollapsibleChannel = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const statusIndicator = (status) => {
        let statusColor = '';
        switch (status){
            case 'online':
                statusColor = 'bg-green-500';
            break
            case 'offline':
                statusColor = 'bg-gray-500'
            break
            case 'away':
                statusColor = 'bg-yellow-500'
            break
            default:
                break
        }
        return statusColor;
    }

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center w-full text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 focus:outline-none">
                {isOpen ? <ChevronDown size={16} className="mr-1"/> : <ChevronRight size={16} className="mr-1"/>}
                {title}
            </button>
            {isOpen && <div className="space-y-1">
                {children.map((child, idx) => (
                    <a key={idx} href="#"
                       className={`flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors duration-200 
                       ${isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white'}`}
                    >
                        <div className="flex items-center space-x-2">
                            {title === 'Channels' ?
                                <Hash size={16} /> :
                                <div className="relative">
                                    <img className="h-8 w-8 rounded-full object-cover" src={child.avatar} alt={child.name} />
                                    {child.status &&
                                        <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ${statusIndicator(child.status)}`}></span>
                                    }
                                </div>
                            }
                            <span>{child.name}</span>
                        </div>
                        {child.unread > 0 && <span
                            className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">{child?.unread}</span>}
                    </a>))}
                <button className="flex items-center w-full px-3 py-1.5 text-sm text-gray-400 hover:text-white">
                    <Plus size={16} className="mr-2"/>
                    {`Add ${title !== 'Channels' ? 'teammate' : 'channel'}`}
                </button>
            </div>}

        </div>);
}

export default CollapsibleChannel;
