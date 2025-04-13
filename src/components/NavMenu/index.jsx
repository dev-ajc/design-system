import React from 'react';
import { ChevronDown, ShoppingCart, User } from 'lucide-react';


const NavMenu = ({ menuItems }) => {
    console.log('menuItems', menuItems);
    return (
        <div className="NavMenu">
            {menuItems.map((item, index) => (
                <div key={index} className="NavMenu__item">
                    <button className="NavMenu__button">
                        <span>{item.label}</span>
                        {item.children && (
                            <ChevronDown size={14} className="NavMenu__button-icon" />
                        )}
                    </button>

                    {item.children && (
                        <div className="NavMenu__dropdown">
                            {item.children.map((child, childIndex) => (
                                <a
                                    key={childIndex}
                                    href={child.url}
                                    className="NavMenu__dropdown-item"
                                >
                                    {child.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className="NavMenu__icons">
                <a href="/account" className="NavMenu__icon-link">
                    <User size={20} />
                </a>
                <a href="/cart" className="NavMenu__icon-link">
                    <ShoppingCart size={20} />
                    <span className="NavMenu__cart-badge">3</span>
                </a>
            </div>
        </div>
    );
};

export default NavMenu;
