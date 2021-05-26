import React from 'react';
import FirstComponent from './components/First'
import SecondComponent from './components/Second'

const Components = {
    First: FirstComponent,
    Second: SecondComponent
}

export default profile => {

    // First Iteration: Components["First"]
    // Second Iteration: Components["Second"]
    // Third Iteration: Components["Third"]

    if (typeof Components[profile.component] !== "undefined") {
        return React.createElement(Components[profile.component], {
            key: profile.name,
            block: profile
        });
    }
}