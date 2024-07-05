import { useState, useEffect } from 'react';

function PickList({ setFilter }) {
  const [checked, setChecked] = useState({
    selectWildfire: true,
    selectVolcano: true,
    selectIceberg: true,
  });

  useEffect(() => {
    setFilter(checked);
  }, [checked, setFilter]);

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSelectAll = (event) => {
    const check = event.target.checked;
    setChecked({
      selectWildfire: check,
      selectVolcano: check,
      selectIceberg: check,
    });
  };

  return (
    <div className='picklist'>
      <label>
        <input
          type="checkbox"
          name="selectAll"
          checked={checked.selectWildfire && checked.selectVolcano && checked.selectIceberg}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="selectWildfire"
          checked={checked.selectA}
          onChange={handleChange}
        />
        Select Wildfire
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="selectVolcano"
          checked={checked.selectB}
          onChange={handleChange}
        />
        Select Volcano
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="selectIceberg"
          checked={checked.selectC}
          onChange={handleChange}
        />
        Select Iceberg
      </label>
    </div>
  );
}

export default PickList;