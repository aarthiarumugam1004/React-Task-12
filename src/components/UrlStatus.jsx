import React from 'react';
import { Globe } from 'lucide-react';

function UrlStatus({ currentPage, startIndex, endIndex, totalCount }) {
  return (
    <div className="url-status-card">
      <div className="url-status-header">
        <Globe size={18} className="url-icon" />
        <span>Current URL Search Parameter:</span>
      </div>
      <div className="url-code">
        <code>page={currentPage}</code>
      </div>
      <div className="url-info">
        Showing records {startIndex + 1} - {Math.min(endIndex, totalCount)} of {totalCount} users
      </div>
    </div>
  );
}

export default UrlStatus;
