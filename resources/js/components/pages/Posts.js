import React from "react";
import { useHistory } from "react-router-dom";

function Posts() {
    const history = useHistory();

    console.log(history);

    return (
        <>
            <h1>
                <a href="/posts/" alt="">
                    Hello
                </a>
            </h1>
        </>
    );
}

export default Posts;
