import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    transform: translateX(230px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;

    &.fade-in {
        transform: translateX(0px);
		opacity: 1;
        transition: transform 1s ease, opacity 2s ease;
    }
`

const FadeIn = ({children}) => {
    const ref = useRef(null);

    //if using multiple fade in components, could move this outside and pass in as a prop
    const animationObserver = new IntersectionObserver(entries => {
		for (const entry of entries) {
			entry.target.classList.toggle('fade-in', entry.isIntersecting)
		}
	});

	useEffect(() => {
        if (ref.current) animationObserver.observe(ref.current);

		return () => animationObserver.unobserve(ref.current);
	}, []);

    return (
        <StyledComp ref={ref}>{children}</StyledComp>
    );
}

export default FadeIn;