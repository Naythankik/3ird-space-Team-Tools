import React from 'react';
import { Plus, MessageSquare } from 'lucide-react';


const WelcomeScreen = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center text-center bg-indigo-50 p-8">
            <div className="max-w-md">
                <MessageSquare size={64} className="mx-auto text-indigo-400 mb-6" />
                <h2 className="text-3xl font-bold text-zin-200 mb-2">Welcome to TeamSync!</h2>
                <p className="text-gray-400 mb-6">
                    It looks like you're ready to start collaborating. Select a channel from the sidebar to jump into a conversation or create a new one to get started.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center">
                        <Plus size={20} className="mr-2" />
                        Create Channel
                    </button>
                </div>
            </div>
        </div>
    );
}


export default WelcomeScreen;
