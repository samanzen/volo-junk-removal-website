import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ href, children, className, variant = 'primary' }: ButtonProps) {
  const baseClasses = 'inline-block px-8 py-3 rounded-lg font-semibold text-white text-center transition-transform transform hover:scale-105 shadow-lg';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark',
    secondary: 'bg-secondary hover:bg-secondary/80',
  };

  const mergedClasses = twMerge(baseClasses, variantClasses[variant], className);

  return (
    <Link href={href} className={mergedClasses}>
      {children}
    </Link>
  );
}
