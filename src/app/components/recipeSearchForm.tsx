"use client"
import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';

const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese"
];

interface RecipeSearchFormProps {
    onSearchSubmit: (data: { query: string; cuisine: string; preparationTime: number }) => void;
}

const RecipeSearchForm: React.FC<RecipeSearchFormProps> = ({onSearchSubmit}) => {

    const [query, setFood] = useState<string>('');
    const [cuisine, setCuisine] = useState<string>('');
    const [preparationTime, setPreparationTime] = useState<number | ''>('');
    const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (query || cuisine || preparationTime) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
      }, [query, cuisine, preparationTime]);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => setFood(e.target.value);
    const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCuisine(e.target.value);
    const handlePreparationTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => setPreparationTime(Number(e.target.value))

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearchSubmit({ query, cuisine, preparationTime: preparationTime as number });
        
    };


    return (
        <div className="flex justify-center items-center m-6 sm:m-10 lg:m-20">
            <form onSubmit={handleSubmit} className="flex flex-col bg-white shadow-md rounded-lg p-6 space-y-4 w-full max-w-md">
                <div className="flex flex-col">
                    <label htmlFor="query" className="font-semibold mb-1">Recipe Query:</label>
                    <input
                        id="query"
                        type="text"
                        value={query}
                        onChange={handleQueryChange}
                        placeholder="e.g., pasta"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cuisine" className="font-semibold mb-1">Cuisine:</label>
                    <select 
                        id="cuisine" 
                        value={cuisine} 
                        onChange={handleCuisineChange} 
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Cuisine</option>
                        {cuisines.map((cuisineOption) => (
                            <option key={cuisineOption} value={cuisineOption}>
                                {cuisineOption}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="preparationTime" className="font-semibold mb-1">Preparation Time (minutes):</label>
                    <input
                        id="preparationTime"
                        type="number"
                        value={preparationTime === '' ? '' : preparationTime}
                        onChange={handlePreparationTimeChange}
                        min="0"
                        placeholder="e.g., 30"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={!isButtonActive}
                    className={`bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200 ${!isButtonActive && 'opacity-50 cursor-not-allowed'}`}
                >
                    Search
                </button>
            </form>
        </div>
    );
}    



export default RecipeSearchForm;