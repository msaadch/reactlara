import React, { useState } from 'react';

export default function MyPage({ message }) {
    // 1. useState initialize karein (shuru me input khali hoga)
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');

    // 2. Input change handler function
    const handleChange = (e) => {
        setName(e.target.value); // Jo bhi type hoga, state me save ho jayega
    };
    const handleAgeChange = (e) => {
        setAge(e.target.value); // Jo bhi type hoga, state me save ho jayega
    };
    const handleCityChange = (e) => {
        setCity(e.target.value); // Jo bhi type hoga, state me save ho jayega
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                
                {/* Controller se aaya hua message */}
                {/* <h1 className="text-2xl font-bold text-indigo-600 mb-2">Laravel + React</h1>
                <p className="text-gray-600 mb-6">{message}</p> */}

                {/* Form Input Field */}
                <div className="mb-4 text-left">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Apna Naam Likhein:
                    </label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={handleChange} 
                        placeholder="Yahan type karein..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    />
                    <input 
                        type="number" 
                        value={age} 
                        onChange={handleAgeChange} 
                        placeholder="Apni umar likhein..."
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    />
                    <select
                        value={city}
                        onChange={handleCityChange}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    >
                        <option value="">Apna shahar chunein...</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </div>

                {/* Real-time State Display */}
                <div className="mt-6 p-4 bg-indigo-50 rounded-md border border-indigo-100">
                    <p className="text-sm text-indigo-800 font-medium">
                        State me is waqt yeh naam hai:
                    </p>
                    <p className="text-lg font-bold text-indigo-900 mt-1 min-h-[28px]">
                        {name || '___'} 
                    </p>
                </div>
                <div className="mt-4 p-4 bg-indigo-50 rounded-md border border-indigo-100">
                    <p className="text-sm text-indigo-800 font-medium">
                        State me is waqt yeh umar hai:
                    </p>
                    <p className="text-lg font-bold text-indigo-900 mt-1 min-h-[28px]">
                        {age || '___'} 
                    </p>
                </div>
                <div className="mt-4 p-4 bg-indigo-50 rounded-md border border-indigo-100">
                    <p className="text-sm text-indigo-800 font-medium">
                        State me is waqt yeh shahar hai:    
                    </p>
                    <p className="text-lg font-bold text-indigo-900 mt-1 min-h-[28px]">
                        {city || '___'} 
                    </p>
                </div>

            </div>
        </div>
    );
}
