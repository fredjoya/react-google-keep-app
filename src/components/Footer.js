import React from 'react';

function Footer() {
    return (
        <div>
            <p style={{
                position: "absolute", 
                bottom: "0", 
                wdith: "100%", 
                textAlign: "center"
                }}>
                Copyright &copy; {new Date().getFullYear()} Fred Joya</p>
        </div>
    )
}

export default Footer