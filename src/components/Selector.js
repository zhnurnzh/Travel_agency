import React from 'react';

const Selector = () => {
  return (
    <div className="language-selector flex items-center">
      <select id="language" name="language" className="p-2 ml-3 rounded bg-[#0D1680] text-white font-medium outline-none">
        <option value="english">ENG</option>
        <option value="russian">RUS</option>
        <option value="turkmen">TK</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default Selector;
