import React from 'react';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
}

const WHATSAPP_NUMBER = "+8801740688872";
const DEFAULT_MESSAGE = "Hello Dr. Shania’s team,\nI would like to book a consultation.\n\nName:\nPreferred date:\nPrimary concern:\nPreferred time:";

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Book Consultation", 
  className = "",
  variant = 'primary'
}) => {
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap text-sm tracking-wide rounded-full";
  
  const variants = {
    primary: "relative bg-gradient-to-r from-accent to-blue-600 text-white hover:scale-[1.02] active:scale-[0.98] px-7 py-3.5 group shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.4)] overflow-hidden border border-transparent",
    secondary: "relative bg-surface/80 dark:bg-surface/50 border border-border/60 text-foreground hover:border-accent/40 hover:bg-surface-hover/80 px-5 py-2.5 shadow-sm group overflow-hidden",
    text: "text-text-secondary hover:text-accent group flex items-center space-x-1.5"
  };

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {(variant === 'primary' || variant === 'secondary') && (
        <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      )}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        <span>{text}</span>
      </span>
    </a>
  );
};
