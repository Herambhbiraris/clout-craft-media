import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Unlock, Users, TrendingUp, Download, 
  MessageCircle, Mail, Phone, ExternalLink, Calendar, Search, 
  Filter, Trash2, Edit3, CheckCircle2, Clock, Sparkles, RefreshCw, 
  Layers, ArrowRight, X, ChevronDown, Check, Eye
} from 'lucide-react';
import { leadStorage, Lead, LeadStatus } from '../utils/leadStorage';
import { triggerConfetti } from '../utils/confetti';

const STATUS_CONFIG: Record<LeadStatus, { label: string; bg: string; text: string; border: string }> = {
  new: { label: '🆕 New Lead', bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-300' },
  audit_in_progress: { label: '🔍 Audit in Progress', bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-300' },
  teardown_sent: { label: '📊 Teardown Sent', bg: 'bg-purple-100', text: 'text-purple-900', border: 'border-purple-300' },
  call_booked: { label: '📞 Strategy Call Booked', bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-300' },
  closed: { label: '🏆 Partner Closed', bg: 'bg-green-100', text: 'text-green-950', border: 'border-green-400' },
  archived: { label: '📁 Archived', bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
};

export const AdminPage: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('cloutcraft_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);

  // Data & Filter State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Detail Drawer State
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteEdit, setNoteEdit] = useState<string>('');
  const [noteSaved, setNoteSaved] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads();
    }
  }, [isAuthenticated]);

  const loadLeads = () => {
    const data = leadStorage.getLeads();
    setLeads(data);
  };

  const handlePinSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Default founder passcode is 2026
    if (pinInput === '537799' || pinInput === 'cloutcraft2026') {
      sessionStorage.setItem('cloutcraft_admin_auth', 'true');
      setIsAuthenticated(true);
      setPinError(false);
      triggerConfetti();
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('cloutcraft_admin_auth');
    setIsAuthenticated(false);
    setPinInput('');
  };

  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    const updated = leadStorage.updateLeadStatus(id, newStatus);
    setLeads(updated);
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const handleSaveNotes = () => {
    if (!selectedLead) return;
    const updated = leadStorage.updateLeadNotes(selectedLead.id, noteEdit);
    setLeads(updated);
    setSelectedLead(prev => prev ? { ...prev, internalNotes: noteEdit } : null);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
      const updated = leadStorage.deleteLead(id);
      setLeads(updated);
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const handleResetDemo = () => {
    if (window.confirm('Reset leads list to initial demo data?')) {
      const updated = leadStorage.resetToDemo();
      setLeads(updated);
    }
  };

  const openLeadDrawer = (lead: Lead) => {
    setSelectedLead(lead);
    setNoteEdit(lead.internalNotes || '');
  };

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.brandHandle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.whatsapp.includes(searchQuery) ||
      (lead.notes && lead.notes.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || lead.stage.includes(categoryFilter);

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Calculate Metrics
  const totalLeads = leads.length;
  const activeAudits = leads.filter(l => l.status === 'new' || l.status === 'audit_in_progress').length;
  const callsAndWins = leads.filter(l => l.status === 'call_booked' || l.status === 'closed').length;
  
  // Estimate pipeline sum
  const estimatedPipeline = leads.reduce((sum, l) => {
    if (l.budgetRange.includes('3,50,000+')) return sum + 350000;
    if (l.budgetRange.includes('1,50,000')) return sum + 200000;
    if (l.budgetRange.includes('50,000')) return sum + 100000;
    return sum + 40000;
  }, 0);

  // 1. PIN Authentication Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md brutal-card p-8 bg-paper text-center">
          <div className="w-16 h-16 rounded-2xl bg-panel-dark text-white flex items-center justify-center mx-auto mb-4 border-2 border-line shadow-brutal-sm">
            <Lock className="w-8 h-8 text-accent-mint" />
          </div>

          <h2 className="text-2xl font-black font-display text-ink mb-1">
            Founder Access Gate
          </h2>
          <p className="text-xs text-ink/80 font-medium mb-6">
            Enter your founder PIN to access the CloutCraft Media CRM &amp; Lead Management Portal.
          </p>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                maxLength={12}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter PIN (Default: 2026)"
                autoFocus
                className="w-full text-center text-2xl tracking-widest font-mono font-black py-3 px-4 rounded-xl border-2 border-line bg-bg focus:outline-none focus:bg-white text-ink placeholder:text-ink/30 placeholder:tracking-normal placeholder:font-sans placeholder:text-sm"
              />
              {pinError && (
                <p className="text-xs font-mono font-bold text-accent-coral mt-2">
                  Incorrect PIN. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="brutal-btn-primary w-full py-3.5 text-sm justify-center shadow-brutal gap-2 font-bold"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Command Dashboard</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-line/20 text-[11px] font-mono text-ink/60">
            🔒 CloutCraft Triple-Dispatch Security &bull; Client Data Safe
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="py-8 sm:py-12">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Top Header & Actions Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-line">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="brutal-tag bg-panel-dark text-white text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-mint" />
                <span>FOUNDER CRM COMMAND</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
              <span className="text-xs font-mono font-bold text-accent-emerald">LIVE PIPELINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-display text-ink tracking-tight">
              CloutCraft Inbound Leads &amp; Audit Desk
            </h1>
            <p className="text-xs sm:text-sm text-ink/80 font-medium">
              Real-time central repository capturing all 48-Hour Growth Audits, Contact Inquiries, and ROI Simulations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => leadStorage.exportLeadsToCsv()}
              className="brutal-btn-secondary py-2.5 px-4 text-xs font-mono font-bold gap-2 shadow-brutal-sm"
              title="Download spreadsheet of all inquiries"
            >
              <Download className="w-3.5 h-3.5 text-brand" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleResetDemo}
              className="brutal-btn-secondary py-2.5 px-3 text-xs font-mono text-ink/80 hover:text-ink gap-1.5 shadow-brutal-sm"
              title="Reset sample test leads"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Demo</span>
            </button>

            <button
              onClick={handleLogout}
              className="brutal-btn-primary py-2.5 px-4 text-xs font-mono font-bold gap-2 shadow-brutal-sm bg-panel-dark"
              title="Lock dashboard"
            >
              <Lock className="w-3.5 h-3.5 text-amber-300" />
              <span>Lock Panel</span>
            </button>
          </div>
        </div>

        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="brutal-card p-5 bg-paper">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-ink/70 uppercase">Total Inbound Leads</span>
              <Users className="w-4 h-4 text-brand" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-display text-ink">{totalLeads}</div>
            <span className="text-[11px] font-mono text-accent-emerald font-bold mt-1 block">100% captured &amp; stored</span>
          </div>

          <div className="brutal-card p-5 bg-panel-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-ink/70 uppercase">Estimated Monthly Pipeline</span>
              <TrendingUp className="w-4 h-4 text-brand" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-display text-panel-dark">
              ₹{(estimatedPipeline / 100000).toFixed(1)}L+
            </div>
            <span className="text-[11px] font-mono text-panel-dark font-bold mt-1 block">Gross Retainer Value</span>
          </div>

          <div className="brutal-card p-5 bg-paper">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-ink/70 uppercase">Active 48h Audits</span>
              <Clock className="w-4 h-4 text-accent-amber" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-display text-accent-amber">{activeAudits}</div>
            <span className="text-[11px] font-mono text-ink font-semibold mt-1 block">Requiring Teardown Prep</span>
          </div>

          <div 
            className="brutal-card brutal-card-dark p-5 bg-panel-dark text-white" 
            style={{ backgroundColor: '#241447', color: '#FFFFFF' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-purple-200 uppercase">Booked / Won</span>
              <Sparkles className="w-4 h-4 text-accent-mint" />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-display text-accent-mint">{callsAndWins}</div>
            <span className="text-[11px] font-mono text-purple-200 font-semibold mt-1 block">High Intent Pipeline</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="brutal-card p-4 sm:p-5 bg-paper mb-6">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-ink/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by client name, brand @handle, email, or notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-line bg-bg font-sans text-xs sm:text-sm font-medium text-ink focus:outline-none focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/60 hover:text-ink"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand shrink-0" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2.5 rounded-lg border-2 border-line bg-bg font-sans text-xs sm:text-sm font-bold text-ink focus:outline-none focus:bg-white"
              >
                <option value="all">All Brand Categories</option>
                <option value="D2C">D2C / E-commerce</option>
                <option value="SaaS">Startup / SaaS</option>
                <option value="Creator">Creator / Personal Brand</option>
                <option value="B2B">B2B / High-Ticket</option>
              </select>
            </div>

          </div>

          {/* Status Filter Badges */}
          <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-line/20 overflow-x-auto pb-1 text-xs">
            <span className="font-mono text-ink/60 font-bold uppercase text-[10px] mr-1 shrink-0">Stage:</span>
            {[
              { id: 'all', label: 'All' },
              { id: 'new', label: 'New' },
              { id: 'audit_in_progress', label: 'In Progress' },
              { id: 'teardown_sent', label: 'Teardown Sent' },
              { id: 'call_booked', label: 'Call Booked' },
              { id: 'closed', label: 'Closed' },
              { id: 'archived', label: 'Archived' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1 rounded-md font-mono text-xs font-bold border transition-colors shrink-0 ${
                  statusFilter === tab.id
                    ? 'bg-panel-dark text-white border-line shadow-brutal-sm'
                    : 'bg-bg text-ink border-line/40 hover:bg-panel-1'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table / Cards */}
        {filteredLeads.length === 0 ? (
          <div className="brutal-card p-12 bg-paper text-center">
            <Users className="w-12 h-12 text-ink/30 mx-auto mb-3" />
            <h3 className="text-xl font-bold font-display text-ink mb-1">No Leads Match Your Filter</h3>
            <p className="text-xs text-ink/70 max-w-sm mx-auto mb-4">
              Try adjusting your search query, status tabs, or clear filters to view your client inquiries.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setStatusFilter('all'); setCategoryFilter('all'); }}
              className="brutal-btn-secondary text-xs py-2 px-4"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLeads.map((lead) => {
              const statusCfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
              const formattedDate = new Date(lead.createdAt).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              // Clean phone for WhatsApp URL
              const cleanPhone = lead.whatsapp.replace(/[^0-9]/g, '');
              const waText = encodeURIComponent(
                `Hi ${lead.name || 'there'}! Herambh here from CloutCraft Media.\n\n` +
                `I am reviewing your 48-Hour Growth Audit request for ${lead.brandHandle || 'your brand'}. ` +
                `I noticed your current objective is "${lead.growthGoal}".\n\n` +
                `Would you be open for a quick 10-minute tear-down sync on your video retention and ad CAC?`
              );

              return (
                <div 
                  key={lead.id}
                  className="brutal-card p-4 sm:p-5 bg-paper hover:bg-bg/40 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                >
                  {/* Lead Summary Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Status Selector Dropdown */}
                      <div className="relative inline-block">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border-2 ${statusCfg.bg} ${statusCfg.text} ${statusCfg.border} focus:outline-none cursor-pointer`}
                        >
                          <option value="new">🆕 New Lead</option>
                          <option value="audit_in_progress">🔍 Audit in Progress</option>
                          <option value="teardown_sent">📊 Teardown Sent</option>
                          <option value="call_booked">📞 Call Booked</option>
                          <option value="closed">🏆 Partner Closed</option>
                          <option value="archived">📁 Archived</option>
                        </select>
                      </div>

                      <span className="font-mono text-[11px] font-bold bg-panel-1 px-2 py-0.5 rounded border border-line">
                        {lead.stage}
                      </span>

                      <span className="font-mono text-[11px] font-bold text-panel-dark bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        {lead.budgetRange}
                      </span>

                      <span className="text-[11px] font-mono text-ink/60 ml-auto lg:ml-0">
                        {formattedDate} &bull; via {lead.source}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <h3 className="text-lg font-black font-display text-ink">
                        {lead.name}
                      </h3>
                      <span className="text-xs font-mono font-bold text-brand bg-panel-1/70 px-2 py-0.5 rounded border border-line/30 w-fit">
                        {lead.brandHandle}
                      </span>
                    </div>

                    <p className="text-xs text-ink/90 font-medium line-clamp-2 max-w-3xl">
                      <strong>Focus:</strong> {lead.growthGoal} 
                      {lead.notes && <> &bull; <strong>Client Note:</strong> "{lead.notes}"</>}
                    </p>

                    {lead.internalNotes && (
                      <div className="bg-amber-50 border border-amber-200 rounded p-2 text-xs text-amber-900 font-mono font-semibold max-w-3xl">
                        📝 Founder Note: {lead.internalNotes}
                      </div>
                    )}
                  </div>

                  {/* Quick Action Triggers */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-line/20">
                    {/* WhatsApp 1-Click Button */}
                    <a
                      href={`https://wa.me/${cleanPhone}?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn-primary py-2 px-3 text-xs bg-[#25D366] hover:bg-emerald-600 text-ink font-bold border-line shadow-brutal-sm gap-1.5"
                      title="Open WhatsApp with pre-filled greeting"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-ink" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Email 1-Click Button */}
                    <a
                      href={`mailto:${lead.email}?subject=CloutCraft%20Media%20Growth%20Audit%20for%20${encodeURIComponent(lead.brandHandle)}`}
                      className="brutal-btn-secondary py-2 px-3 text-xs font-mono font-bold gap-1.5 shadow-brutal-sm"
                      title="Send email"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand" />
                      <span>Email</span>
                    </a>

                    {/* View Details Drawer */}
                    <button
                      onClick={() => openLeadDrawer(lead)}
                      className="brutal-btn-secondary py-2 px-3 text-xs font-mono font-bold gap-1 shadow-brutal-sm bg-panel-1"
                      title="View full submission and edit private notes"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Details &amp; Notes</span>
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteLead(lead.id)}
                      className="p-2 rounded-lg border-2 border-line bg-paper text-ink/60 hover:text-accent-coral hover:bg-red-50 transition-colors shadow-brutal-sm"
                      title="Delete lead"
                      aria-label="Delete Lead"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Lead Details & Founder Notes Drawer / Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl brutal-card bg-paper p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-line mb-6">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-brand block mb-1">
                  CLIENT INQUIRY DOSSIER // {selectedLead.id}
                </span>
                <h2 className="text-2xl font-black font-display text-ink">
                  {selectedLead.name} &bull; {selectedLead.brandHandle}
                </h2>
                <span className="text-xs font-mono text-ink/70">
                  Received on {new Date(selectedLead.createdAt).toLocaleString('en-IN')} via {selectedLead.source}
                </span>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 rounded-lg border-2 border-line bg-panel-1 text-ink flex items-center justify-center hover:bg-panel-2 shadow-brutal-sm"
                aria-label="Close dossier"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dossier Grid */}
            <div className="space-y-4 mb-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-bg border-2 border-line p-3 rounded-lg">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink/60 block">Business Category</span>
                  <span className="font-bold text-ink">{selectedLead.stage}</span>
                </div>

                <div className="bg-bg border-2 border-line p-3 rounded-lg">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink/60 block">Monthly Growth Budget</span>
                  <span className="font-bold text-panel-dark">{selectedLead.budgetRange}</span>
                </div>

                <div className="bg-bg border-2 border-line p-3 rounded-lg">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink/60 block">Email Address</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-mono font-bold text-brand hover:underline">
                    {selectedLead.email}
                  </a>
                </div>

                <div className="bg-bg border-2 border-line p-3 rounded-lg">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink/60 block">WhatsApp Number</span>
                  <a href={`https://wa.me/${selectedLead.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-emerald-800 hover:underline">
                    {selectedLead.whatsapp}
                  </a>
                </div>
              </div>

              <div className="bg-bg border-2 border-line p-4 rounded-lg">
                <span className="text-[10px] font-mono uppercase font-bold text-ink/60 block mb-1">Primary Growth Bottleneck / Goal</span>
                <p className="font-medium text-ink">{selectedLead.growthGoal}</p>
              </div>

              {selectedLead.notes && (
                <div className="bg-bg border-2 border-line p-4 rounded-lg">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink/60 block mb-1">Client Questionnaire Notes &amp; Simulator Inputs</span>
                  <p className="font-medium text-ink whitespace-pre-wrap">{selectedLead.notes}</p>
                </div>
              )}

              {/* Internal Founder Notes Section */}
              <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-amber-950 uppercase flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5 text-amber-800" />
                    <span>Private Founder Strategy Notes</span>
                  </span>
                  {noteSaved && (
                    <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Saved!
                    </span>
                  )}
                </div>

                <textarea
                  rows={3}
                  value={noteEdit}
                  onChange={(e) => setNoteEdit(e.target.value)}
                  placeholder="Add private teardown observations, pricing agreed, next call dates, or hook angle notes..."
                  className="w-full p-2.5 rounded-lg border-2 border-amber-400 bg-white font-sans text-xs font-medium text-ink focus:outline-none resize-none"
                />

                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleSaveNotes}
                    className="brutal-btn-primary py-1.5 px-4 text-xs bg-amber-950 text-white font-mono font-bold"
                  >
                    Save Internal Note
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-line">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-ink">Update Stage:</span>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as LeadStatus)}
                  className="font-mono text-xs font-bold px-2 py-1 rounded border-2 border-line bg-paper"
                >
                  <option value="new">🆕 New Lead</option>
                  <option value="audit_in_progress">🔍 Audit in Progress</option>
                  <option value="teardown_sent">📊 Teardown Sent</option>
                  <option value="call_booked">📞 Call Booked</option>
                  <option value="closed">🏆 Partner Closed</option>
                  <option value="archived">📁 Archived</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDeleteLead(selectedLead.id)}
                  className="brutal-btn-secondary py-2 px-3 text-xs text-accent-coral font-mono font-bold"
                >
                  Delete Dossier
                </button>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="brutal-btn-primary py-2 px-4 text-xs font-mono font-bold"
                >
                  Close Dossier
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
