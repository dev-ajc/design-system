import React from 'react';
import { useState, useEffect } from 'react';
import { Search, Sun } from 'lucide-react';


const SearchBar = ({ onSearch, suggestedProducts }) => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    
    useEffect(() => {
        if (query.length > 1 && suggestedProducts?.length) {
            const filtered = suggestedProducts.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
            setShowSuggestions(filtered.length > 0);
        } else {
            setShowSuggestions(false);
        }
    }, [query, suggestedProducts]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setShowSuggestions(false);
    };
    
    const handleSuggestionClick = (suggestion) => {
        onSearch(suggestion.name);
        setQuery(suggestion.name);
        setShowSuggestions(false);
    };
    
    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit} className="SearchBar__form">
                <input
                    type="text"
                    placeholder="Search for lamps, bulbs, fixtures..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length > 1 && setShowSuggestions(true)}
                    className="SearchBar__input"
                />
                <button type="submit" className="SearchBar__button">
                    <Search size={18} />
                </button>
            </form>
            
            {showSuggestions && (
                <div className="SearchBar__suggestions">
                    <ul className="SearchBar__suggestions-list">
                        {filteredSuggestions.map((suggestion, index) => (
                            <li 
                                key={index} 
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="SearchBar__suggestion-item"
                            >
                                <div className="SearchBar__suggestion-icon">
                                    <Sun size={16} className="SearchBar__suggestion-icon-inner" />
                                </div>
                                <div>
                                    <div className="SearchBar__suggestion-text">{suggestion.name}</div>
                                    <div className="SearchBar__suggestion-category">{suggestion.category}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
