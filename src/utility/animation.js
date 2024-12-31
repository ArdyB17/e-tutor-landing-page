export const SlideLeft = (delay) => ({
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
        }
    }
});

export const SlideRight = (delay) => ({
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
        }
    }
});

export const SlideUp = (delay) => ({
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: delay,
            ease: "easeOut"
        }
    }
});

export const FadeIn = (delay) => ({
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeIn"
        }
    }
});

export const ScaleIn = (delay) => ({
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: delay,
            ease: [0.16, 1, 0.3, 1]
        }
    }
});

export const BounceIn = (delay) => ({
    hidden: {
        opacity: 0,
        scale: 0.3
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: delay,
            bounce: 0.5,
            type: "spring"
        }
    }
});

export const RotateIn = (delay) => ({
    hidden: {
        opacity: 0,
        rotate: -180,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
        }
    }
});

export const StaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const HoverScale = {
    whileHover: {
        scale: 1.05,
        transition: {
            duration: 0.2
        }
    },
    whileTap: {
        scale: 0.95
    }
};

// Add new animations
export const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const buttonHover = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95
    }
};

/**
 * Animation utility file containing reusable Framer Motion animations
 */

// Navbar specific animations
export const navbarAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

// Menu item hover animation
export const menuItemHover = {
    initial: { width: "0%" },
    hover: {
        width: "100%",
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

// Mobile menu animations
export const mobileMenuBackdrop = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { delay: 0.2, duration: 0.3 }
    }
};

export const mobileMenuContent = {
    hidden: { x: "-100%", opacity: 0.5 },
    visible: {
        x: "0%",
        opacity: 1,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 300
        }
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

// Dropdown menu animations
export const dropdownAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.3 }
    }
};

// Button hover animations
export const buttonHoverScale = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
};

// ...existing animations...