import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usersData } from './data/usersData';
import Header from './components/Header';
import UrlStatus from './components/UrlStatus';
import UserTable from './components/UserTable';
import UserCardList from './components/UserCardList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  // 1. Get searchParams and setSearchParams hook from React Router
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. Read the "page" query parameter from URL (e.g., ?page=2)
  const rawPage = parseInt(searchParams.get('page'), 10);
  const pageFromUrl = isNaN(rawPage) ? 1 : rawPage;

  // 3. Set records per page (5 per page)
  const recordsPerPage = 5;

  // 4. Calculate total number of pages
  const totalPages = Math.ceil(usersData.length / recordsPerPage);

  // 5. Keep page number within valid limits (between 1 and totalPages)
  let currentPage = pageFromUrl;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  // 6. Calculate slice range for current page
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  // 7. Get 5 user records for current page
  const currentUsers = usersData.slice(startIndex, endIndex);

  // View state (Table view or Card view)
  const [viewMode, setViewMode] = useState('table');

  // 8. Handler function to update URL query parameter when changing pages
  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div className="app-container">
      {/* Header Component */}
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      {/* URL Search Parameter Status Component */}
      <UrlStatus 
        currentPage={currentPage} 
        startIndex={startIndex} 
        endIndex={endIndex} 
        totalCount={usersData.length} 
      />

      {/* Main Data Display Area (Table or Cards) */}
      <main className="content-area">
        {viewMode === 'table' ? (
          <UserTable users={currentUsers} />
        ) : (
          <UserCardList users={currentUsers} />
        )}
      </main>

      {/* Pagination Component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={goToPage} 
      />
    </div>
  );
}

export default App;
