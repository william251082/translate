import React, { useState } from "react";

const App = () => {
    const [resource, setResource] = useState('posts');

        return (
            <div>
                <div>
                    <button onClick={() => setResource('posts')}>Posts</button>
                    <button onClick={() => setResource('todos')}>Todos</button>
                </div>
                {console.log(setResource)}
                {resource}
            </div>
        );
};

export default App;


// try on browser
// const colors = ['red', 'blue'];
// const colorOne = colors[0];
// const colorTwo = colors[1];
//
// // destructure the assign
// const [colorThree, colorFour] = colors;
