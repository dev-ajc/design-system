import React from 'react';


const NewsTicker = ({ news }) => {
    return (
        <div className="NewsTicker">
            <div className="NewsTicker__content">
                {news.map((item, index) => (
                    <div key={index} className="NewsTicker__item">
                        {item.text} 
                        {index < news.length - 1 && <span className="NewsTicker__dot">•</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsTicker;
