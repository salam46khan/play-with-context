import React from 'react';
import { LevelContext } from '../../context/LevelContext';

const Section = ({level, children}) => {
    return (
        <section className="section border mx-auto max-w-2xl p-2">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
};

export default Section;