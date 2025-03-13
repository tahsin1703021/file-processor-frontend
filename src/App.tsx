import { useState } from 'react';

export default function App() {
    const [output, setOutput] = useState('');

    const runCommand = async (type: string) => {
        try {
            const response = await fetch(`http://localhost:3001/run/${type}`);
            const result = await response.text();
            setOutput(result);
        } catch (error) {
            setOutput('Error executing command');
        }
    };

    return (
        <div className="p-5 flex flex-col items-center space-y-4">
            <h1 className="text-xl font-bold">Run Node.js Script</h1>
            <div className="flex space-x-2">
                <button onClick={() => runCommand('default')} className="px-4 py-2 bg-blue-500 text-white rounded">Run Default</button>
                <button onClick={() => runCommand('worker')} className="px-4 py-2 bg-green-500 text-white rounded">Run Worker</button>
            </div>
            <pre className="mt-4 p-2 bg-gray-100 border w-full max-w-lg overflow-auto">{output}</pre>
        </div>
    );
}
