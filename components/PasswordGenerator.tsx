import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PasswordGenerator = () =>
{
    const [includeAlpha, setIncludeAlpha] = useState(true);
    const [includeNumeric, setIncludeNumeric] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () =>
    {
        const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numeric = '0123456789';
        const symbols = '!@#$%^&*()-_=+';
        let characters = '';

        if (includeAlpha) characters += alpha;
        if (includeNumeric) characters += numeric;
        if (includeSymbols) characters += symbols;

        const newPassword = Array.from({ length: 12 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
        setPassword(newPassword);
    };

    return (
        <div className="container mx-auto mt-20">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-6">Password Generator</h1>
                <div className="flex space-x-4 mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={includeAlpha} onChange={() => setIncludeAlpha(!includeAlpha)} />
                        <span className="ml-2">Alphabets</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={includeNumeric} onChange={() => setIncludeNumeric(!includeNumeric)} />
                        <span className="ml-2">Numeric</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
                        <span className="ml-2">Symbols</span>
                    </label>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={generatePassword}>Generate</button>
                    <div className="border border-gray-300 rounded-lg px-4 py-2">{password}</div>
                    <CopyToClipboard text={password}>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Copy</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
