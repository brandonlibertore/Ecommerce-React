import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlights from './UI/Highlights';

const Highlight = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlights 
                            subTitle="Easy and Quick" 
                            icon={<FontAwesomeIcon icon="bolt"/>}
                            highlightPara="Get access to the book you purchased online instantly."
                        />

                        <Highlights 
                            subTitle="10,000+ Books" 
                            icon={<FontAwesomeIcon icon="book-open"/>}
                            highlightPara="Library has books in all your favorite categories."
                        />

                        <Highlights 
                            subTitle="Affordable" 
                            icon={<FontAwesomeIcon icon="tags"/>}
                            highlightPara="Get your hands on popular books for as little as $10."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlight;