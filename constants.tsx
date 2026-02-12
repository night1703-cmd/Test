
import React from 'react';
import { Shield, Building2, Wrench, CheckCircle2, Star, Users, Briefcase, Zap, Clock, DollarSign, Settings, Droplets, Monitor, HardHat, FileText, Activity } from 'lucide-react';

export const COLORS = {
  primary: '#dc2626', // Red
  secondary: '#f97316', // Orange
  dark: '#0a0a0a',
  gray: '#1f2937'
};

export const SERVICES = [
  {
    title: 'Integrated Facilities Management',
    category: 'facilities',
    icon: <Building2 className="w-8 h-8" />,
    description: 'End-to-end management of hard, soft, and technical services under one coordinated system.',
    details: [
      'Hard Services: AC maintenance, electrical, plumbing',
      'Soft Services: Building cleaning, housekeeping, disinfection',
      'Civil Works: Carpentry, painting, plaster works',
      'Specialized Hospitality: Professional concierge, office boy services'
    ],
    metrics: [
      { label: 'Asset Up-time', value: '98.5%' },
      { label: 'SLA Compliance', value: '100%' },
      { label: 'Response Time', value: '< 2hrs' }
    ],
    subServices: [
      { label: 'HVAC Specialist', icon: <Droplets className="w-4 h-4" /> },
      { label: 'Eco-Cleaning', icon: <Zap className="w-4 h-4" /> },
      { label: 'Smart Monitoring', icon: <Monitor className="w-4 h-4" /> }
    ],
    workflow: ['Initial Audit', 'Preventive Plan', 'SLA Execution', 'Real-time Reporting']
  },
  {
    title: 'Elite Security Solutions',
    category: 'security',
    icon: <Shield className="w-8 h-8" />,
    description: 'Professional security guarding and risk management focused on protecting people and assets.',
    details: [
      'Manned Guarding: Residential, commercial, and retail specialists',
      'Executive Protection: VIP bodyguards, event bouncers',
      'Technical Security: CCTV installation & surveillance',
      'Safety Services: Certified lifeguards and traffic marshals'
    ],
    metrics: [
      { label: 'SIRA Certified', value: '100%' },
      { label: 'Incident Resolution', value: '99.9%' },
      { label: 'Field Staff', value: '500+' }
    ],
    subServices: [
      { label: 'Patrol Units', icon: <HardHat className="w-4 h-4" /> },
      { label: 'CCTV Ops', icon: <Monitor className="w-4 h-4" /> },
      { label: 'Risk Analysis', icon: <FileText className="w-4 h-4" /> }
    ],
    workflow: ['Risk Assessment', 'Guard Deployment', '24/7 Monitoring', 'Incident Management']
  },
  {
    title: 'Technical & Specialized Works',
    category: 'technical',
    icon: <Wrench className="w-8 h-8" />,
    description: 'Expert delivery of high-level access, civil, and specialized maintenance services.',
    details: [
      'High-level facade cleaning',
      'IT Infrastructure & Hardware maintenance',
      'Perimeter Security & Industrial fencing',
      'Aquatics: Swimming pool maintenance'
    ],
    metrics: [
      { label: 'Safety Record', value: 'Zero Inc.' },
      { label: 'Tech Specialist', value: 'Senior' },
      { label: 'Certifications', value: 'ISO/HSE' }
    ],
    subServices: [
      { label: 'Rope Access', icon: <Activity className="w-4 h-4" /> },
      { label: 'IT Support', icon: <Monitor className="w-4 h-4" /> },
      { label: 'Civil Projects', icon: <Settings className="w-4 h-4" /> }
    ],
    workflow: ['Scope Definition', 'Safety Induction', 'Technical Execution', 'Quality Handover']
  }
];

export const VALUES = [
  {
    title: 'Proficiency & Excellence',
    description: 'Ensuring every task is handled with deep technical expertise.',
    icon: <CheckCircle2 className="w-6 h-6 text-orange-500" />
  },
  {
    title: 'Integrity & Flexibility',
    description: 'Building trust through transparent and reliable service delivery.',
    icon: <Star className="w-6 h-6 text-red-500" />
  },
  {
    title: 'Safety Centricity',
    description: 'Maintaining a focus on health and safety for all occupants.',
    icon: <Shield className="w-6 h-6 text-orange-500" />
  }
];

export const STRATEGIC_PRINCIPLES = [
  { 
    id: 'ALT-SEC-01', 
    label: 'Keeping People Safe', 
    desc: 'Uncompromising security protocols across all premises.',
    icon: <Shield className="w-6 h-6" />,
    color: 'red'
  },
  { 
    id: 'ALT-OPS-02', 
    label: 'Operational Excellence', 
    desc: 'Streamlined facility management with zero downtime.',
    icon: <Zap className="w-6 h-6" />,
    color: 'orange'
  },
  { 
    id: 'ALT-REL-03', 
    label: 'Client Partnerships', 
    desc: 'Long-term trust through transparent communication.',
    icon: <Users className="w-6 h-6" />,
    color: 'red'
  },
  { 
    id: 'ALT-SRV-04', 
    label: 'Service Reliability', 
    desc: '24/7 availability for emergency maintenance support.',
    icon: <Clock className="w-6 h-6" />,
    color: 'orange'
  },
  { 
    id: 'ALT-VAL-05', 
    label: 'Value-Driven Solutions', 
    desc: 'Optimizing resources without sacrificing quality.',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'red'
  },
  { 
    id: 'ALT-TEC-06', 
    label: 'Technical Proficiency', 
    desc: 'Leveraging modern tech for efficient building ops.',
    icon: <Settings className="w-6 h-6" />,
    color: 'orange'
  }
];
