'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: {
    title: string;
    features: string[];
  };
}

interface TabbedCardProps {
  tabs: Tab[];
  className?: string;
}

export default function TabbedCard({ tabs, className = '' }: TabbedCardProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* Tab Headers */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#2A462A] text-[#48a546] bg-white'
                  : 'border-transparent text-white bg-[#2A462A] hover:bg-[#3a613a] hover:border-[#2A462A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTabData && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {activeTabData.content.title}
            </h3>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Program Features:
              </h4>
              <ul className="space-y-3">
                {activeTabData.content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#48a546] rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
