import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
};

export function Button({ href, children, variant = 'primary', type = 'button', disabled, className: extra = '', ...props }: ButtonProps) {
  const base = 'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60';
  const variants: Record<string, string> = {
    primary: 'btn-shine bg-button-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-xl',
    secondary: 'border border-emerald-200 bg-white text-slate-800 hover:border-emerald-400 hover:bg-emerald-50',
    danger: 'bg-rose-700 text-white hover:bg-rose-800',
    ghost: 'text-slate-700 hover:bg-slate-100',
  };
  const className = `${base} ${variants[variant]} ${extra}`;
  if (href && !disabled) return <Link href={href} className={className}>{children}</Link>;
  return <button type={type} disabled={disabled} className={className} {...props}>{children}</button>;
}
