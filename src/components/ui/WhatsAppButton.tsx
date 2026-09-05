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

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out whitespace-nowrap text-sm tracking-wide rounded-full";
  
  const variants = {
    primary: "relative bg-gradient-to-r from-accent to-blue-600 dark:from-accent dark:to-blue-500 text-white hover:scale-[1.02] active:scale-[0.98] px-8 py-3.5 group shadow-[0_10px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.4)] overflow-hidden border border-transparent",
    secondary: "relative bg-surface-light border border-border text-foreground hover:border-accent/50 px-6 py-3 shadow-sm group overflow-hidden",
    text: "text-text-secondary hover:text-foreground group flex items-center space-x-2"
  };

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {(variant === 'primary' || variant === 'secondary') && (
        <span className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></span>
      )}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        <span>{text}</span>
      </span>
    </a>
  );
};
