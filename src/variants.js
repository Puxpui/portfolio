export const fadeIn = (direction, deLay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? -20 : direction === 'down' ? 40 : 0,
            x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: deLay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    };
};