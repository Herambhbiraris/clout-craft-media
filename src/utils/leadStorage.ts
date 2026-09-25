export type LeadStatus = 'new' | 'audit_in_progress' | 'teardown_sent' | 'call_booked' | 'closed' | 'archived';

export interface Lead {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  brandHandle: string;
  stage: string;
  growthGoal: string;
  budgetRange: string;
  notes?: string;
  source: string;
  status: LeadStatus;
  internalNotes?: string;
  createdAt: string;
}

const STORAGE_KEY = 'cloutcraft_leads_db_v1';

// Seed initial realistic leads for initial demo/launch
const INITIAL_SEED_LEADS: Lead[] = [
  {
    id: 'lead-001',
    name: 'Aarav Patel',
    email: 'aarav@zengloworganics.com',
    whatsapp: '+919820123456',
    brandHandle: '@zenglow.organics',
    stage: 'D2C / E-commerce Brand',
    growthGoal: 'Viral Video & Retention Architecture',
    budgetRange: '₹1,50,000 - ₹3,50,000 / month',
    notes: 'Stuck at ₹18L/mo revenue. Ad CAC on Meta has doubled recently. Looking for 3s retention hooks and high-tempo UGC creative.',
    source: '48h Growth Audit Modal',
    status: 'audit_in_progress',
    internalNotes: 'Teardown deck prepared. Pacing drops after 2.8s on their top 3 reels. Scheduled follow-up sync for Thursday.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hrs ago
  },
  {
    id: 'lead-002',
    name: 'Rohan Mehra',
    email: 'rohan@finflow.app',
    whatsapp: '+919711889900',
    brandHandle: 'finflow.app',
    stage: 'Startup / Tech SaaS',
    growthGoal: 'Full-Funnel Performance Ads (Meta & Google)',
    budgetRange: '₹3,50,000+ / month (Scale)',
    notes: 'Fintech personal wealth tracker. Looking to scale to 50K MAUs before Series A. Need high-converting LinkedIn founder video & Google PMax.',
    source: 'ROI Modeling Suite',
    status: 'call_booked',
    internalNotes: 'Founder agreed to ₹2.4L/mo retainer + performance kicker. Strategy call on Zoom at 3 PM Friday.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 42).toISOString(), // 42 hrs ago
  },
  {
    id: 'lead-003',
    name: 'Tanya Sen',
    email: 'tanya@novathread.co',
    whatsapp: '+919988776655',
    brandHandle: '@novathread_india',
    stage: 'D2C / E-commerce Brand',
    growthGoal: 'Brand Strategy & Contrarian Positioning',
    budgetRange: '₹50,000 - ₹1,50,000 / month',
    notes: 'Premium streetwear label. Organic engagement is okay but conversion rate is sub-1%. Need narrative positioning overhaul.',
    source: 'Contact Page Direct Form',
    status: 'new',
    internalNotes: '',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hrs ago
  },
  {
    id: 'lead-004',
    name: 'Kabir Varma',
    email: 'mgmt@kabirtech.in',
    whatsapp: '+919876012345',
    brandHandle: '@kabir_codes (85K followers)',
    stage: 'Creator / Personal Brand',
    growthGoal: 'Creator Talent Management & Brand Deals',
    budgetRange: '₹1,50,000 - ₹3,50,000 / month',
    notes: 'Tech creator doing YouTube Shorts & IG Reels. Wants CloutCraft to manage inbound brand deals, sponsorship rate cards, and monetization.',
    source: 'Service Deep Dive: Talent Management',
    status: 'teardown_sent',
    internalNotes: 'Sent custom rate card framework & 3-sponsor target pitch list. Awaiting confirmation.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
  }
];

export const leadStorage = {
  getLeads: (): Lead[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_LEADS));
        return INITIAL_SEED_LEADS;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error reading leads from storage', e);
      return INITIAL_SEED_LEADS;
    }
  },

  saveLead: (leadInput: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead => {
    try {
      const currentLeads = leadStorage.getLeads();
      const newLead: Lead = {
        ...leadInput,
        id: `lead-${Date.now()}`,
        status: 'new',
        createdAt: new Date().toISOString(),
      };

      const updated = [newLead, ...currentLeads];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return newLead;
    } catch (e) {
      console.error('Error saving lead to storage', e);
      throw e;
    }
  },

  updateLeadStatus: (id: string, newStatus: LeadStatus): Lead[] => {
    try {
      const currentLeads = leadStorage.getLeads();
      const updated = currentLeads.map(lead => 
        lead.id === id ? { ...lead, status: newStatus } : lead
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error updating lead status', e);
      return leadStorage.getLeads();
    }
  },

  updateLeadNotes: (id: string, internalNotes: string): Lead[] => {
    try {
      const currentLeads = leadStorage.getLeads();
      const updated = currentLeads.map(lead => 
        lead.id === id ? { ...lead, internalNotes } : lead
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error updating lead internal notes', e);
      return leadStorage.getLeads();
    }
  },

  deleteLead: (id: string): Lead[] => {
    try {
      const currentLeads = leadStorage.getLeads();
      const updated = currentLeads.filter(lead => lead.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error deleting lead', e);
      return leadStorage.getLeads();
    }
  },

  resetToDemo: (): Lead[] => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_LEADS));
    return INITIAL_SEED_LEADS;
  },

  exportLeadsToCsv: () => {
    const leads = leadStorage.getLeads();
    if (!leads.length) return;

    const headers = ['ID', 'Date', 'Status', 'Name', 'Email', 'WhatsApp', 'Brand Handle', 'Category', 'Goal', 'Budget', 'Client Notes', 'Internal Founder Notes', 'Source'];
    
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${new Date(l.createdAt).toLocaleDateString()} ${new Date(l.createdAt).toLocaleTimeString()}"`,
      `"${l.status.toUpperCase()}"`,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.whatsapp || '').replace(/"/g, '""')}"`,
      `"${(l.brandHandle || '').replace(/"/g, '""')}"`,
      `"${(l.stage || '').replace(/"/g, '""')}"`,
      `"${(l.growthGoal || '').replace(/"/g, '""')}"`,
      `"${(l.budgetRange || '').replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
      `"${(l.internalNotes || '').replace(/"/g, '""')}"`,
      `"${(l.source || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `cloutcraft_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
