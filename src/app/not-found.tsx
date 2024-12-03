// File: src/app/not-found.js

import Link from "next/link";
import "./css/globals.css"; // Optional: Import global styles
import React from "react";

export default function NotFound() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "3rem", color: "red" }}>404</h1>
            <h2 style={{ fontSize: "1.5rem" }}>Page Not Found</h2>
            <p style={{ margin: "1rem 0" }}>
                The page you are looking for might have been removed or does not exist.
            </p>
            <Link href="/" style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px"
            }}>
                Go to Homepage
            </Link>
        </div>
    );
}
