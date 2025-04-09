import React from 'react';

// Footer.jsx

export const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px 0',
    };

    const footerContentStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const footerLinksStyle = {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    };

    const footerLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
    };

    const footerLinkHoverStyle = {
        textDecoration: 'underline',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <p>&copy; {new Date().getFullYear()} Pathsala. All rights reserved.</p>
                <ul style={footerLinksStyle}>
                    <li>
                        <a
                            href="/about"
                            style={footerLinkStyle}
                            onMouseOver={(e) => (e.target.style.textDecoration = footerLinkHoverStyle.textDecoration)}
                            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            style={footerLinkStyle}
                            onMouseOver={(e) => (e.target.style.textDecoration = footerLinkHoverStyle.textDecoration)}
                            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="/privacy"
                            style={footerLinkStyle}
                            onMouseOver={(e) => (e.target.style.textDecoration = footerLinkHoverStyle.textDecoration)}
                            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                        >
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
