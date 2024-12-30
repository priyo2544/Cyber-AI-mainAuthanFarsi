declare module 'jos-animation' {
    const JOS: {
        init: (options?: {
            passive?: boolean;
            once?: boolean;
            animation?: string;
            timingFunction?: string;
            threshold?: number;
            delay?: number;
            duration?: number;
            scrollDirection?: string;
            rootMargin?: string;
        }) => void;
        refresh: () => void;
    };
    export default JOS;
} 