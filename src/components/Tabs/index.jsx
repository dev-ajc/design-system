import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Tabs = ({
    tabs = [],
    variant = 'primary',
    vertical = false,
    useAccordionOnMobile = true,
    defaultActiveTab = 0,
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    const [activeContents, setActiveContents] = useState([defaultActiveTab]);
    const [isMobile, setIsMobile] = useState(false);

    // Using CSS variable
    const breakpointMd = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'));

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= breakpointMd);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    // Handle tab click
    const handleTabClick = (index) => {
        if (isMobile && useAccordionOnMobile) {
            // For accordion behavior: toggle active content
            if (activeContents.includes(index)) {
                setActiveContents(activeContents.filter(item => item !== index));
            } else {
                setActiveContents([...activeContents, index]);
            }
        } else {
            // Standard tab behavior
            setActiveTab(index);
        }
    };

    // Determine component classes
    const tabsClasses = classNames('Tabs', {
        'Tabs--accordion': useAccordionOnMobile,
        'Tabs--vertical': vertical,
        [`Tabs--${variant}`]: variant
    });

    return (
        <div className={tabsClasses}>
            <ul className="Tabs__list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={classNames('Tabs__tab', {
                            'Tabs__tab--active': isMobile && useAccordionOnMobile
                                ? activeContents.includes(index)
                                : activeTab === index
                        })}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>

            {/* Render content based on active tab or accordion state */}
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={classNames('Tabs__content', {
                        'Tabs__content--active': isMobile && useAccordionOnMobile
                            ? activeContents.includes(index)
                            : activeTab === index
                    })}
                    style={{
                        display: isMobile && useAccordionOnMobile
                            ? activeContents.includes(index) ? 'block' : 'none'
                            : activeTab === index ? 'block' : 'none'
                    }}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
};

Tabs.propTypes = {
    /** Array of tab objects with title and content */
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.node.isRequired,
            content: PropTypes.node.isRequired
        })
    ).isRequired,
    /** Style variant */
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    /** Whether tabs should be displayed vertically */
    vertical: PropTypes.bool,
    /** Whether to use accordion style on mobile devices */
    useAccordionOnMobile: PropTypes.bool,
    /** Index of the default active tab */
    defaultActiveTab: PropTypes.number
};

export default Tabs;
