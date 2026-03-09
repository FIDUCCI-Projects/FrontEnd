import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface FiducciLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

/**
 * FiducciLogo component
 * Renders the official brand logo for FIDUCCI.
 */
export const FiducciLogo = ({ className, size = 'md' }: FiducciLogoProps) => {
    const sizeClasses = {
        sm: "text-xl tracking-[0.04em]",
        md: "text-[1.75rem] tracking-[0.06em]",
        lg: "text-5xl tracking-[0.06em]",
    };

    return (
        <div className={cn("flex items-center leading-none", className)}>
            <span
                className={cn(
                    "font-heading font-black text-white select-none",
                    sizeClasses[size]
                )}
            >
                FIDUCCI
            </span>
        </div>
    );
};
