import { useEffect, useRef, useState } from "react";

const useIsInView = ({
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    shouldObserve = true,
} = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!shouldObserve) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect(); // Stop observing after it intersects
                }
            },
            {
                root,
                rootMargin,
                threshold,
            }
        );

        const element = elementRef.current;

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [root, rootMargin, threshold, shouldObserve]);

    // Immediate check if element is already in view
    useEffect(() => {
        if (!shouldObserve) return;

        const checkIfAlreadyInView = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
                if (alreadyInView) {
                    setIsIntersecting(true);
                }
            }
        };

        checkIfAlreadyInView();
    }, [shouldObserve]);

    return { isIntersecting, elementRef };
};

export default useIsInView;