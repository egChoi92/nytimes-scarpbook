import { useCallback, useEffect, useRef } from 'react';

export default function useObserver(fn: () => void) {
	console.log('fn: ', fn);
	const ref = useRef<HTMLDivElement>(null);

	const callback = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			if (entries[0].intersectionRatio <= 0) return;

			fn();
			console.log('entries: ', entries);
		},
		[fn],
	);

	useEffect(() => {
		if (!ref.current) return;
		console.log('ref: ', ref);

		const observer = new IntersectionObserver(callback);
		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, callback]);
	return ref;
}
