"use client";

import { useEffect, useRef, useState } from "react";

const CursorFollowTrail = () => {
    const trailCount = 6; // Number of trailing circles
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true); // Control visibility on small screens

    const trailRefs = useRef(
        new Array(trailCount).fill({ x: 0, y: 0 }) // Initial positions of all trail circles
    );

    useEffect(() => {
        // Check screen size and update visibility
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsVisible(false); // Hide on small screens (e.g., phones)
            } else {
                setIsVisible(true); // Show on larger screens
            }
        };

        // Initial check and event listener for window resize
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Disable mousemove listener if not visible

        // Update cursor position on mouse move
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({
                x: e.clientX + window.scrollX,
                y: e.clientY + window.scrollY,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return; // Skip trail updates if not visible

        let animationFrameId: number;

        const updateTrail = () => {
            trailRefs.current = trailRefs.current.map((trail, index) => {
                // Gradually move each trail circle closer to the cursor position
                const speed = 0.2 - index * 0.02; // Slow down the further circles
                return {
                    x: trail.x + (cursorPosition.x - trail.x) * speed,
                    y: trail.y + (cursorPosition.y - trail.y) * speed,
                };
            });

            // Trigger a re-render by setting state (to update the positions)
            setCursorPosition((prev) => ({ ...prev }));

            animationFrameId = requestAnimationFrame(updateTrail);
        };

        animationFrameId = requestAnimationFrame(updateTrail);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [cursorPosition, isVisible]);

    if (!isVisible) return null; // Do not render anything if not visible

    return (
        <>
            {trailRefs.current.map((trail, index) => (
                <div
                    className="cursor-trail"
                    key={index}
                    style={{
                        position: "absolute",
                        left: `${trail.x}px`,
                        top: `${trail.y}px`,
                        width: `${20 - index * 2}px`, // Gradually shrink the size
                        height: `${20 - index * 2}px`,
                        backgroundColor: "#F25722",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        transform: "translate(-50%, -50%)",
                        zIndex: 99999999,
                        opacity: 1 - index * 0.1, // Gradually fade out
                    }}
                />
            ))}
        </>
    );
};

export default CursorFollowTrail;