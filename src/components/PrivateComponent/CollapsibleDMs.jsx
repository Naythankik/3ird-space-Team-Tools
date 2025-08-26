import {ChevronDown, ChevronRight, Plus} from "lucide-react";
import React, {useState} from "react";
import {useAuth} from "../../context/AuthContext.jsx";

const CollapsibleDms = ({ children, readDm, activeDm  }) => {
    const [isOpen, setIsOpen] = useState(true);

    const { user } = useAuth();

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
                Direct Messages
            </button>
            {isOpen && <div className="space-y-1">
                {children.map((child, idx) => (
                    <button
                        type="button"
                        onClick={() => readDm(child.id, 'dms')}
                        key={idx}
                        className={`flex items-center w-full justify-between cursor-pointer px-3 py-1.5 rounded-md text-sm transition-colors duration-200 
                        ${activeDm === child.id ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-indigo-400 hover:text-white'}`}
                    >
                        {child?.participants.filter(({id}) => id !== user.id).map(({fullName, status, avatar}, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <div className="relative">
                                    <img className="h-8 w-8 rounded-md object-cover" src={avatar} alt={fullName} />
                                    {status &&
                                        <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ${statusIndicator(status)}`}></span>
                                    }
                                </div>
                                <span>{fullName}</span>
                            </div>
                        ))}
                        {child.unread > 0 && <span
                            className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">{child?.unread}</span>}
                    </button>))}
                <button className="flex items-center w-full px-3 py-1.5 text-sm text-gray-400 hover:text-white">
                    <Plus size={16} className="mr-2"/>
                    Add teammate
                </button>
            </div>}

        </div>);
}

export default CollapsibleDms;
