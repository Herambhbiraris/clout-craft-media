import { ServiceItem, CaseStudy, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    tagline: 'Algorithmic Presence That Never Sleeps',
    description: 'Data-backed content calendars, cultural trend-jacking, and proactive community engagement that convert casual scrollers into loyal brand evangelists.',
    iconName: 'MessageSquare',
    deliverables: [
      '12-20 high-retention monthly assets',
      'Daily story sequences & engagement loops',
      'Community replies & DM sales funneling',
      'Monthly competitor & hook teardown report'
    ],
    metrics: '+280% Avg Engagement Rate',
    bgClass: 'bg-paper',
    tag: 'ORGANIC REACH'
  },
  {
    id: 'video-editing',
    number: '02',
    title: 'Viral Video Production & Editing',
    tagline: 'Scroll-Stopping Retention Architecture',
    description: 'Cut-throat 3-second hooks, dynamic kinetic typography, high-energy SFX, and pacing designed specifically around Instagram Reels, TikTok, and YouTube Shorts retention curves.',
    iconName: 'Film',
    deliverables: [
      'Multi-format repurposing (9:16, 1:1, 16:9)',
      'Custom visual B-roll & motion graphics',
      'Retention drop-off optimization',
      'Trending audio & hook sound design'
    ],
    metrics: '72% Avg 3s View-Through Rate',
    bgClass: 'bg-panel-1',
    tag: 'VIRAL HOOKS'
  },
  {
    id: 'performance-marketing',
    number: '03',
    title: 'Performance Marketing (Paid Ads)',
    tagline: 'Predictable Revenue, Relentless ROAS',
    description: 'Full-funnel Meta & Google ad campaigns engineered for measurable CAC reduction and cashflow multiplication. We test 20+ creative variations weekly.',
    iconName: 'Target',
    deliverables: [
      'Meta (IG/FB) & Google Search/PMax campaigns',
      'Creative sprint testing matrix',
      'High-converting landing page optimization',
      'Real-time automated analytics dashboard'
    ],
    metrics: '4.6x Average Campaign ROAS',
    bgClass: 'bg-panel-2',
    tag: 'PAID SCALE'
  },
  {
    id: 'brand-strategy',
    number: '04',
    title: 'Brand Strategy & Positioning',
    tagline: 'Make Your Brand Impossible to Ignore',
    description: 'Distinctive brand positioning, narrative frameworks, voice bibles, and visual identity systems that give you unfair pricing power in crowded markets.',
    iconName: 'Compass',
    deliverables: [
      'Unfair Advantage & category creation map',
      'Brand voice & copywriting guidelines',
      'Visual design identity & social kit',
      'Core offer architecture & pricing teardown'
    ],
    metrics: 'Top 5% Category Moat',
    bgClass: 'bg-panel-1',
    tag: 'DIFFERENTIATION'
  },
  {
    id: 'talent-management',
    number: '05',
    title: 'Talent Management for Creators',
    tagline: 'Turn Influence Into a Long-Term Empire',
    description: 'Hands-on executive representation for digital creators. We negotiate five-to-six figure brand deals, build proprietary digital products, and manage operational chaos.',
    iconName: 'Star',
    deliverables: [
      'End-to-end inbound/outbound brand deals',
      'Contract negotiation & rate card optimization',
      'Digital product / community launch ops',
      'Personal branding PR & media placements'
    ],
    metrics: '2.4x Deal Value Expansion',
    bgClass: 'bg-panel-dark text-paper',
    tag: 'CREATOR EMPIRE'
  },
  {
    id: 'influencer-marketing',
    number: '06',
    title: 'Influencer Marketing Campaigns',
    tagline: 'Borrow Trust at Exponential Scale',
    description: 'Data-vetted creator collaborations that put your product in front of captive audiences. No vanity metric spammers — strictly creators with active buyer engagement.',
    iconName: 'Sparkles',
    deliverables: [
      'Curated creator roster selection & vetting',
      'Performance-structured creative briefs',
      'Product seeding & unboxing workflows',
      'Attribution tracking & UGC rights handover'
    ],
    metrics: '3.9x Earned Media Value (EMV)',
    bgClass: 'bg-paper',
    tag: 'SEEDED COLLABS'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'zenglow-d2c',
    client: 'ZenGlow Organics',
    category: 'D2C Brand Scale',
    badge: 'D2C E-COMMERCE',
    title: 'Scaling from ₹1.5L to ₹8.4L Monthly Ad Spend at 4.7x Blended ROAS',
    problem: 'Struggling with fatigued ad creatives and plateaued Meta ad spend at 1.8x ROAS with rising customer acquisition costs.',
    solution: 'Engineered a 20-hook UGC video testing sprint, built a dedicated TikTok/Reels landing page, and launched micro-influencer unboxing sequences.',
    metrics: [
      { label: 'Blended ROAS', value: '4.7x', change: '+161%' },
      { label: 'Monthly Revenue', value: '₹34.8L', change: '+380%' },
      { label: 'CAC Reduction', value: '-42%', change: 'Efficient' },
      { label: 'UGC Creatives Tested', value: '48 Assets', change: '8 Winners' }
    ],
    testimonial: {
      quote: "CloutCraft completely transformed how we view paid ads. Their video hook sprint alone generated 3 winning creatives that carried our entire Q4 revenue.",
      author: 'Pooja M.',
      role: 'Co-Founder, ZenGlow Organics'
    },
    tags: ['Meta Ads', 'UGC Video', 'Landing Page Cro', 'Micro-Influencers'],
    growthMultiplier: '4.7x ROAS',
    colorScheme: 'from-purple-100 to-purple-200'
  },
  {
    id: 'akash-fininsights',
    client: 'Akash Finance',
    category: 'Creator Personal Brand',
    badge: 'FINTECH CREATOR',
    title: 'From 12K to 340K Followers and ₹18L in Brand Sponsorships in 6 Months',
    problem: 'Great technical finance knowledge but videos suffered from flat 30-second drop-offs, slow pacing, and zero monetization framework.',
    solution: 'Overhauled visual storytelling: dynamic kinetic B-roll, 3-second contrarian hooks, professional brand kit, and outbound sponsorship deal packaging.',
    metrics: [
      { label: 'Instagram Followers', value: '340K+', change: '+2,733%' },
      { label: 'Total Reel Views', value: '28.4M', change: 'Across 40 videos' },
      { label: 'Brand Deal Revenue', value: '₹18.5L', change: '14 Signed Deals' },
      { label: 'Average Watch Time', value: '88%', change: 'Algorithm Booster' }
    ],
    testimonial: {
      quote: "Working with CloutCraft gave me my time back. They script the hooks, edit with crazy precision, and handle the sponsors so I can focus on research.",
      author: 'Akash R.',
      role: 'Fintech Creator & Analyst'
    },
    tags: ['Shorts/Reels', 'Talent Management', 'Hook Architecture', 'Sponsorship Deals'],
    growthMultiplier: '28M+ Views',
    colorScheme: 'from-brand-light/30 to-panel-2'
  },
  {
    id: 'promptos-launch',
    client: 'PromptOS AI',
    category: 'Startup Launch',
    badge: 'B2B SAAS LAUNCH',
    title: '140+ Enterprise Demos and $1.2M Pipeline Generated in 45 Days',
    problem: 'Early-stage seed funded AI software with zero brand presence and difficult-to-explain technical value proposition.',
    solution: 'Designed an executive founder personal branding campaign on LinkedIn, paired with interactive product teardown videos and Google Performance Max ads.',
    metrics: [
      { label: 'Qualified Demos', value: '142 Demos', change: 'In 45 Days' },
      { label: 'Pipeline Generated', value: '$1.2M', change: 'Enterprise Accounts' },
      { label: 'Organic Impressions', value: '2.1M', change: 'Founder LinkedIn' },
      { label: 'Cost Per Qualified Lead', value: '₹1,240', change: '-55% vs Industry' }
    ],
    testimonial: {
      quote: "The founder-led format is real. You don't deal with account managers who don't understand software. Herambh and the team moved at lightning speed.",
      author: 'Devendra K.',
      role: 'CEO & Founder, PromptOS'
    },
    tags: ['Founder Branding', 'B2B LinkedIn', 'Google Search', 'Video Teardowns'],
    growthMultiplier: '140+ Demos',
    colorScheme: 'from-panel-1 to-panel-3'
  },
  {
    id: 'kultwear-streetwear',
    client: 'KULT Streetwear',
    category: 'Reels & Shorts',
    badge: 'FASHION & APPAREL',
    title: 'Selling Out 3 Drops in 72 Hours via Viral Aesthetic Reels & Creator Seeding',
    problem: 'High customer drop-off on standard product catalog ads and poor community engagement on Instagram.',
    solution: 'Executed a cinematic lookbook reel campaign, seeded 35 regional aesthetic creators, and paired with countdown retargeting ads.',
    metrics: [
      { label: 'Drop Sellout Time', value: '< 72 Hours', change: '3 Consecutive Drops' },
      { label: 'Viral Reel Views', value: '8.9M', change: 'Top video 3.4M' },
      { label: 'Direct Site Traffic', value: '+420%', change: 'Peak Launch Week' },
      { label: 'ROAS on Drop Day', value: '6.2x', change: 'High Purchase Intent' }
    ],
    tags: ['Viral Reels', 'Influencer Seeding', 'Drop Marketing', 'Meta Retargeting'],
    growthMultiplier: '6.2x Drop ROAS',
    colorScheme: 'from-panel-2 to-purple-300'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Engagement & Fit',
    question: 'Why choose a founder-led studio over a traditional agency or freelancers?',
    answer: 'Traditional agencies sell you with senior partners and pass your account to junior interns who treat your brand like a checklist. Freelancers juggle 15 clients and lack full-funnel strategy. At CloutCraft, you work directly with the founder and senior strategists. We take on a strict maximum of 5-7 active partner brands per quarter to guarantee obsession over your metrics.'
  },
  {
    category: 'Timelines & Speed',
    question: 'How fast can we launch campaigns once we onboard?',
    answer: 'Fast. While legacy agencies take 3-4 weeks just to send an onboarding questionnaire, our 48-hour sprint kicks off on Day 1. Your comprehensive Growth Blueprint is delivered within 4 days, and initial creative assets/campaigns go live within 7-10 days.'
  },
  {
    category: 'Pricing & Contracts',
    question: 'What is your pricing model? Are we locked into long contracts?',
    answer: 'We operate on transparent, flexible monthly growth retainers or project-based sprint contracts. We do not believe in locking clients into rigid 12-month lock-in contracts with zero exit clauses. If we do not hit our agreed milestone targets, you shouldn’t be handcuffed to us.'
  },
  {
    category: 'Deliverables & Ownership',
    question: 'Who owns the creative assets, ad accounts, and content produced?',
    answer: 'You own 100% of everything, forever. All raw project files, video exports, ad copy, Figma brand files, and data inside your Meta/Google ad accounts belong exclusively to your business.'
  },
  {
    category: 'Services',
    question: 'Can we hire CloutCraft for just Video Editing or just Paid Ads?',
    answer: 'Yes! While our clients achieve the strongest compounding returns when pairing organic viral content with paid performance media, we offer dedicated single-craft sprints for Video Editing, Meta Ad Management, or Creator Talent representation.'
  },
  {
    category: 'Location & Collab',
    question: 'Where are you based and how do we communicate day-to-day?',
    answer: 'We are based out of Nashik, India, and partner with brands globally across India, the US, and UAE. Day-to-day collaboration happens seamlessly via a dedicated private WhatsApp/Slack channel with sub-2-hour response times, plus weekly 45-minute live sprint reviews.'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Direct Access to Strategists',
    cloutcraft: 'Directly with Founder & Senior Lead',
    agencies: 'Junior Account Coordinators',
    freelancers: 'Yes, but lacks strategic breadth'
  },
  {
    feature: 'Speed of Iteration & Delivery',
    cloutcraft: '24-48 Hour Turnarounds',
    agencies: '10-14 Day Approval Layers',
    freelancers: 'Unpredictable delays'
  },
  {
    feature: 'Creative & Performance Synergy',
    cloutcraft: 'Unified under one growth engine',
    agencies: 'Siloed creative vs media buying teams',
    freelancers: 'Only one skill set'
  },
  {
    feature: 'Client Cap & Dedicated Focus',
    cloutcraft: 'Strict cap (5-7 active clients)',
    agencies: '40+ accounts per account manager',
    freelancers: 'Juggles whatever comes in'
  },
  {
    feature: 'Contract Flexibility',
    cloutcraft: 'Milestone-based, month-to-month options',
    agencies: '6-12 Month Rigid Lock-ins',
    freelancers: 'Ad-hoc'
  },
  {
    feature: 'Weekly Communication',
    cloutcraft: 'Private WhatsApp/Slack + Weekly Sprint',
    agencies: 'Monthly generic PDF report',
    freelancers: 'Sporadic check-ins'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'DISCOVER & AUDIT',
    title: 'The Deep Dive',
    duration: 'Days 1 - 3',
    description: 'We tear down your existing content, customer acquisition costs, competitors, and audience hook patterns to identify immediate low-hanging growth levers.',
    checklist: [
      'Comprehensive Creative & Ad Audit',
      'Audience Persona & Objection Mapping',
      'Competitor Positioning Breakdown'
    ]
  },
  {
    number: '02',
    name: 'STRATEGIZE & BLUEPRINT',
    title: 'The Growth Blueprint',
    duration: 'Days 4 - 6',
    description: 'We build an actionable 30-day battle plan with clear creative themes, content pillars, ad testing architecture, and concrete KPI benchmarks.',
    checklist: [
      '30-Day Channel Content Calendar',
      'High-Intent Hook & Script Matrix',
      'Full-Funnel Ad Campaign Architecture'
    ]
  },
  {
    number: '03',
    name: 'CREATE & DEPLOY',
    title: 'High-Tempo Execution',
    duration: 'Days 7 - 21',
    description: 'We turn scripts into scroll-stopping video assets, launch ad sets, seed creator collaborations, and begin rapid creative testing cycles.',
    checklist: [
      'Kinetic Video Production & Editing',
      'Live Meta/Google Campaign Ignition',
      'Community & Creator Seeding Rollout'
    ]
  },
  {
    number: '04',
    name: 'SCALE & COMPOUND',
    title: 'Relentless Optimization',
    duration: 'Day 22 & Ongoing',
    description: 'We ruthlessly kill what fails, double ad spend on winning hooks, optimize conversion funnels, and scale predictable revenue month over month.',
    checklist: [
      'Weekly Creative Performance Syncs',
      'Aggressive Budget Scaling on Winners',
      'Continuous Audience LTV Expansion'
    ]
  }
];
