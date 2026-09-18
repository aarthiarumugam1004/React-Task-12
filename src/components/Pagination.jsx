import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <footer className="pagination-container">
      {/* Previous Button */}
      <button
        className="page-btn nav-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} // Disabled on 1st page
      >
        <ChevronLeft size={18} />
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="page-numbers">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              className={`page-btn number-btn ${currentPage === pageNum ? 'active' : ''}`}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Current Page Display Indicator */}
      <div className="page-indicator">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </div>

      {/* Next Button */}
      <button
        className="page-btn nav-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages} // Disabled on last page
      >
        <span>Next</span>
        <ChevronRight size={18} />
      </button>
    </footer>
  );
}

export default Pagination;
