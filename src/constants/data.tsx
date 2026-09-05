import { Sparkles, Droplets, Wind, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Treatments', href: '#treatments' },
  { name: 'News', href: '#news' },
];

export const TREATMENTS = [
  {
    id: "01",
    icon: <Sparkles className="w-6 h-6 text-accent mb-6" />,
    title: "Pigmentation & Tone",
    description: "Personalised assessment and treatment planning for clearer, more balanced-looking skin."
  },
  {
    id: "02",
    icon: <Droplets className="w-6 h-6 text-accent mb-6" />,
    title: "Acne Scars & Texture",
    description: "Carefully selected aesthetic approaches tailored to skin condition, concerns, and recovery needs."
  },
  {
    id: "03",
    icon: <Wind className="w-6 h-6 text-accent mb-6" />,
    title: "Hair Restoration",
    description: "Professional consultation for hair and scalp concerns, with realistic and responsible guidance."
  }
];

export const CONSULTATION_STEPS = [
  { 
    title: "Reach Out", 
    desc: "Send a direct message with your primary concern.", 
    icon: <MessageCircle className="w-5 h-5 text-accent" /> 
  },
  { 
    title: "Get Guidance", 
    desc: "Receive immediate consultation availability and next steps.", 
    icon: <CalendarCheck className="w-5 h-5 text-accent" /> 
  },
  { 
    title: "Visit Clinic", 
    desc: "Begin your personalized care journey with Dr. Shania.", 
    icon: <MapPin className="w-5 h-5 text-accent" /> 
  }
];
