import React, { useState } from 'react';
import { 
  MessageSquare, Film, Target, Compass, Star, Sparkles, 
  ArrowRight, Check, CheckCircle2, ChevronRight, Layers 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesBentoProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Star': return <Star className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="brutal-tag bg-panel-1 mb-3">
            <Layers className="w-3.5 h-3.5 text-brand" />
            <span>SIX CRAFTS &bull; ONE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
            What We Do
          </h2>
          <p className="text-ink text-base sm:text-lg font-medium mt-2 max-w-xl">
            We don't offer bloated menus. We execute six battle-tested growth disciplines engineered to build attention and capture cashflow.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="text-xs font-mono text-ink bg-white border-2 border-line px-3.5 py-2 rounded-lg shadow-brutal-sm font-bold inline-block">
            ⚡ All Crafts Include Dedicated Founder Oversight
          </div>
        </div>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => {
          const isDark = service.id === 'talent-management';
          return (
            <div
              key={service.id}
              className={`brutal-card p-6 flex flex-col justify-between transition-all group ${
                isDark 
                  ? 'brutal-card-dark bg-panel-dark text-white border-line' 
                  : `${service.bgClass} text-ink`
              }`}
              style={isDark ? { backgroundColor: '#241447', color: '#FFFFFF' } : undefined}
            >
              <div>
                {/* Card Top: Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                    isDark 
                      ? 'border-white/40 bg-white/10 text-white' 
                      : 'border-line bg-white text-ink'
                  }`}>
                    {service.number} // {service.tag}
                  </span>

                  <div className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isDark 
                      ? 'border-white bg-white text-panel-dark' 
                      : 'border-line bg-panel-dark text-white shadow-brutal-sm'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className={`text-xl font-bold font-display mb-1 ${isDark ? 'text-white' : 'text-ink'}`}>
                  {service.title}
                </h3>
                <p className={`font-mono text-xs font-bold mb-3 ${isDark ? 'text-purple-200' : 'text-brand'}`}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 font-medium ${isDark ? 'text-white/95' : 'text-ink'}`}>
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-3 border-t border-line/20">
                  <span className={`text-[10px] font-mono uppercase tracking-wider block font-black ${
                    isDark ? 'text-purple-200' : 'text-ink'
                  }`}>
                    Included Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                        isDark ? 'text-accent-mint' : 'text-brand'
                      }`} />
                      <span className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-ink'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Action */}
              <div className="pt-4 border-t border-line/20 flex items-center justify-between">
                <div>
                  <span className={`text-[10px] font-mono uppercase block font-bold ${isDark ? 'text-purple-200' : 'text-ink'}`}>
                    Target Benchmark
                  </span>
                  <span className={`text-xs font-mono font-black ${isDark ? 'text-accent-mint' : 'text-brand'}`}>
                    {service.metrics}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className={`text-xs font-bold font-mono px-3 py-1.5 rounded-lg border-2 flex items-center gap-1 transition-all ${
                    isDark
                      ? 'border-white bg-white text-panel-dark hover:bg-purple-100 shadow-brutal-white'
                      : 'border-line bg-white text-ink hover:bg-panel-1 shadow-brutal-sm'
                  }`}
                >
                  <span>Scope Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
