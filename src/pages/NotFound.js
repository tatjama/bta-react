import React from 'react';

function NotFound() {
    const notFound = {
        color: "red",
        textAlign: "center",
        padding: "40vh 0vh"
    }
    return(
        <div className = "not-found" style = {notFound}>
            <h3>Sorry, page is not found!</h3>
        </div>
    )
}

export default NotFound;