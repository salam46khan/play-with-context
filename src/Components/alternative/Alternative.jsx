import React from 'react';
import Section from './Section';
import Heading from './Heading';

const Alternative = () => {
    return (
        <Section level={1}>
            <Heading>Title</Heading>
            <Section level={2}>
                <Heading>Heading</Heading>
                <Heading>Sub-heading</Heading>
                <Section level={3}>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-sub-heading</Heading>
                    <Section level={4}>
                        <Heading>Sub-sub-sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
            
            
        </Section>
    );
};

export default Alternative;