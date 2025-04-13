import React, { useState, useMemo } from 'react';
import productsData from './productsData';
import './LMSProductListingPage.scss';

const LMSProductListingPage = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ categories: [], brands: [], colors: [], tags: [] });

  // Dynamically extract all unique filter options from products data
  const filterOptions = useMemo(() => {
    const options = {
      categories: [],
      brands: [],
      colors: [],
      tags: []
    };
    
    productsData.forEach(product => {
      // Add category if not already in the list
      if (!options.categories.includes(product.category)) {
        options.categories.push(product.category);
      }
      
      if (!options.brands.includes(product.brand)) {
        options.brands.push(product.brand);
      }
      
      if (!options.colors.includes(product.color)) {
        options.colors.push(product.color);
      }
      
      product.tags.forEach(tag => {
        if (!options.tags.includes(tag)) {
          options.tags.push(tag);
        }
      });
    });
    
    // Sort all options alphabetically
    return {
      categories: options.categories.sort(),
      brands: options.brands.sort(),
      colors: options.colors.sort(),
      tags: options.tags.sort()
    };
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
      } else {
        updatedFilters[filterType].push(value);
      }
      return updatedFilters;
    });
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      (!filters.categories.length || filters.categories.includes(product.category)) &&
      (!filters.brands.length || filters.brands.includes(product.brand)) &&
      (!filters.colors.length || filters.colors.includes(product.color)) &&
      (!filters.tags.length || product.tags.some(tag => filters.tags.includes(tag))) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="product-listing-container">
      <div className="search-container">
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div className="content">
        <div className="filters-sidebar">
          <h3>Filters</h3>
          <Filter 
            title="Categories" 
            options={filterOptions.categories} 
            selected={filters.categories} 
            onChange={(value) => handleFilterChange('categories', value)} 
          />
          <Filter 
            title="Brand" 
            options={filterOptions.brands} 
            selected={filters.brands} 
            onChange={(value) => handleFilterChange('brands', value)} 
          />
          <Filter 
            title="Color" 
            options={filterOptions.colors} 
            selected={filters.colors} 
            onChange={(value) => handleFilterChange('colors', value)} 
          />
          <Filter 
            title="Tags" 
            options={filterOptions.tags} 
            selected={filters.tags} 
            onChange={(value) => handleFilterChange('tags', value)} 
          />
        </div>
        <div className="products-container">
          <div className="products-header">
            <p>Showing {filteredProducts.length} of {productsData.length} products</p>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Filter = ({ title, options, selected, onChange }) => (
  <div className="filter-section">
    <h4>{title}</h4>
    {options.map((option) => (
      <label key={option} className="filter-option">
        <input type="checkbox" checked={selected.includes(option)} onChange={() => onChange(option)} />
        <span className="filter-label">{option}</span>
      </label>
    ))}
  </div>
);

const ProductCard = ({ product }) => {
  const renderStars = (rating, totalStars = 5) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return Array.from({ length: totalStars }).map((_, index) => (
      <span key={index} className={index < fullStars ? 'star filled' : 'star empty'}>
        {index < fullStars ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="product-card">
      <div className="image-placeholder"></div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-brand">{product.brand}</p>
      <div className="product-rating">
        {renderStars(product.rating)}
        <span className="review-count">({product.reviews})</span>
      </div>
      <div className="product-pricing">
        {product.originalPrice && (
          <span className="original-price">${product.originalPrice.toFixed(2)}</span>
        )}
        <span className={product.originalPrice ? "sale-price" : "current-price"}>
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default LMSProductListingPage;