import React, { useState } from 'react';
import { FaList, FaMap, FaSlidersH } from 'react-icons/fa';

const FindFuel = () => {
  const [viewMode, setViewMode] = useState('map');

  return (
    <div className="find-fuel">
      <div className="flex justify-between mb-4 gap-4">
        <button
          className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg ${
            viewMode === 'map' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setViewMode('map')}
        >
          <FaMap className="mr-2" /> Map View
        </button>
        <button
          className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg ${
            viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setViewMode('list')}
        >
          <FaList className="mr-2" /> List View
        </button>
        <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
          <FaSlidersH className="mr-2" /> Filter
        </button>
      </div>
      
      <div className="view-container bg-white rounded-lg shadow-sm">
        {viewMode === 'map' ? (
          <div className="map-view h-[calc(100vh-200px)] rounded-lg">
            {/* Map will be implemented here */}
            <div className="flex items-center justify-center h-full bg-gray-50">
              <p className="text-gray-500">Map View Coming Soon</p>
            </div>
          </div>
        ) : (
          <div className="list-view p-4">
            {/* Placeholder for station list */}
            <p className="text-gray-500">Station List Coming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindFuel; 