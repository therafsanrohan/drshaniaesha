import Link from 'next/link';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-6">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-up">
        {/* Simple Graphic */}
        <div className="mx-auto w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-8">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Generic Safe Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-text-secondary text-lg font-medium">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link 
            href="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-surface border border-border text-foreground hover:border-accent/50 transition-all duration-300 px-8 py-3.5 rounded-full font-medium shadow-sm group"
          >
            Return Home
          </Link>
          <div className="w-full sm:w-auto">
            <WhatsAppButton text="Contact Support" variant="primary" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
