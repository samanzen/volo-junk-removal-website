import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent'; // Add accent variant
  as?: 'a' | 'link'; // Allow rendering as a regular 'a' tag
}

export function Button({ href, children, className, variant = 'primary', as = 'link' }: ButtonProps) {
  const baseClasses = 'inline-block px-8 py-3 rounded-lg font-semibold text-white text-center transition-transform transform hover:scale-105 shadow-lg';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark',
    secondary: 'bg-secondary hover:bg-secondary/80',
    accent: 'bg-accent hover:bg-accent-dark', // Add accent style
  };

  const mergedClasses = twMerge(baseClasses, variantClasses[variant], className);

  if (as === 'a') {
    return (
      <a href={href} className={mergedClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClasses}>
      {children}
    </Link>
  );
}
