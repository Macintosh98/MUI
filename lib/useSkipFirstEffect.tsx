import { useRef, useEffect } from "react";

export default function useSkipFirstEffect(
    fn: React.EffectCallback,
    inputs?: React.DependencyList,
) {
    const isMountingRef = useRef(false);

    useEffect(() => {
        isMountingRef.current = true;
    }, []);

    useEffect(() => {
        if (!isMountingRef.current) {
            return fn();
        } else {
            isMountingRef.current = false;
        }
    }, inputs);
}
