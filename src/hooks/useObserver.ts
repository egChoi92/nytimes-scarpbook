import { useCallback, useEffect, useRef } from 'react';

export default function useObserver(fn: () => void) {
	const ref = useRef<HTMLDivElement>(null);

	const callback = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			if (entries[0].intersectionRatio <= 0) return;
			fn();
		},
		[fn],
	);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(callback);
		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, callback]);
	return ref;
}
