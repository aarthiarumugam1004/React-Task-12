import React from 'react';
import { Users, Table as TableIcon, LayoutGrid } from 'lucide-react';

function Header({ viewMode, setViewMode }) {
  return (
    <header className="app-header">
      <div className="header-title">
        <div className="badge-icon">
          <Users size={24} />
        </div>
        <div>
          <h1>User Directory</h1>
        </div>
      </div>

      {/* View Mode Toggle Switch */}
      <div className="view-toggle">
        <button 
          className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
          onClick={() => setViewMode('table')}
          title="Table View"
        >
          <TableIcon size={16} />
          <span>Table</span>
        </button>
        <button 
          className={`toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
          onClick={() => setViewMode('card')}
          title="Card View"
        >
          <LayoutGrid size={16} />
          <span>Cards</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
