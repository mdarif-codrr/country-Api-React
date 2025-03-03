import React, { useState } from 'react'

export default function DropDown({ onRegionChange }) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedRegion(value);
    if (onRegionChange) {
      onRegionChange(value);
    }
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedRegion} id="region">
        <option value="All" hidden="">
          {' '}
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Ocenia</option>
        <option value="All">All</option>
      </select>
    </div>
  )
}
