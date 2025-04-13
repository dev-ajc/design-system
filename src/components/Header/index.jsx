import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import NewsTicker from '../NewsTicker/index';
import SearchBar from '../SearchBar/index';
import NavMenu from '../NavMenu/index';


const Logo = ({ storeName }) => {
    return (
        <div className="Logo">
            <div className="Logo__icon">
            </div>
            <div className="Logo__text">{storeName}</div>
        </div>
    );
};

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
    return (
        <button onClick={toggleMenu} className="MobileMenuButton">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
};


const Header = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [newsItems, setNewsItems] = useState([]);
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    // Simulate API fetch
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock data that would come from an API
                const mockData = {
                    storeInfo: {
                        name: "Lumens",
                        logoUrl: "/logo.png"
                    },
                    suggestedProducts: [
                        { name: "Edison Bulb Pendant Light", category: "Ceiling Lights", url: "/products/edison-pendant" },
                        { name: "Adjustable Desk Lamp", category: "Table Lamps", url: "/products/desk-lamp" },
                        { name: "Industrial Floor Lamp", category: "Floor Lamps", url: "/products/industrial-floor" },
                        { name: "Smart LED Light Strip", category: "Smart Lighting", url: "/products/led-strip" },
                        { name: "Modern Brass Wall Sconce", category: "Wall Lights", url: "/products/brass-sconce" },
                        { name: "Crystal Chandelier", category: "Ceiling Lights", url: "/products/crystal-chandelier" },
                        { name: "Vintage Table Lamp", category: "Table Lamps", url: "/products/vintage-table" },
                        { name: "Minimalist Bedside Lamp", category: "Table Lamps", url: "/products/bedside-lamp" },
                        { name: "Smart Ceiling Light", category: "Smart Lighting", url: "/products/smart-ceiling" },
                        { name: "Outdoor Garden Lights", category: "Outdoor Lighting", url: "/products/garden-lights" },
                        { name: "Bathroom Vanity Light", category: "Wall Lights", url: "/products/vanity-light" },
                        { name: "LED Desk Lamp with USB Port", category: "Table Lamps", url: "/products/led-desk-usb" }
                    ],
                    menuItems: [
                        {
                            label: "Products",
                            url: "/products",
                            children: [
                                { label: "Ceiling Lights", url: "/products/ceiling" },
                                { label: "Floor Lamps", url: "/products/floor-lamps" },
                                { label: "Table Lamps", url: "/products/table-lamps" },
                                { label: "Wall Lights", url: "/products/wall-lights" },
                                { label: "Smart Lighting", url: "/products/smart" }
                            ]
                        },
                        {
                            label: "Collections",
                            url: "/collections",
                            children: [
                                { label: "Vintage", url: "/collections/vintage" },
                                { label: "Modern", url: "/collections/modern" },
                                { label: "Industrial", url: "/collections/industrial" },
                                { label: "Minimalist", url: "/collections/minimalist" }
                            ]
                        },
                        {
                            label: "Sale",
                            url: "/sale"
                        },
                        {
                            label: "Inspiration",
                            url: "/inspiration"
                        }
                    ],
                    news: [
                        { text: "SUMMER SALE: Up to 40% off selected items!", url: "/sale" },
                        { text: "Free shipping on orders over $75", url: "/shipping" },
                        { text: "New Edison collection just arrived!", url: "/collections/edison" },
                        { text: "Visit our new showroom in Chicago", url: "/locations" }
                    ]
                };

                setMenuItems(mockData.menuItems);
                setNewsItems(mockData.news);
                setSuggestedProducts(mockData.suggestedProducts);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to load header data");
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (query) => {
        console.log(`Searching for: ${query}`);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    if (error) {
        return <div className="Header__error-message">{error}</div>;
    }

    return (
        <header className="Header">
            {!isLoading && newsItems.length > 0 && (
                <NewsTicker news={newsItems} />
            )}

            <div className="Header__container">
                <div className="Header__wrapper">
                    <Logo storeName="Lumens" />

                    <div className="SearchBar__container--desktop">
                        <SearchBar
                            onSearch={handleSearch}
                            suggestedProducts={suggestedProducts}
                        />
                    </div>

                    <NavMenu menuItems={menuItems} />
                    <MobileMenuButton isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
                </div>

                {/* Mobile search - only visible on mobile */}
                <div className="SearchBar__container--mobile">
                    <SearchBar
                        onSearch={handleSearch}
                        suggestedProducts={suggestedProducts}
                    />
                </div>

                {/* Mobile menu - only visible when toggled on mobile */}
                {mobileMenuOpen && (
                    <div className="MobileMenu">
                        {menuItems.map((item, index) => (
                            <div key={index} className="MobileMenu__item">
                                <a href={item.url} className="MobileMenu__link">{item.label}</a>
                                {item.children && (
                                    <div className="MobileMenu__submenu">
                                        {item.children.map((child, childIndex) => (
                                            <div key={childIndex} className="MobileMenu__submenu-item">
                                                <a href={child.url} className="MobileMenu__submenu-link">
                                                    {child.label}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;