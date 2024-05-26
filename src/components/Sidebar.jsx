import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [validators, setValidators] = useState([]);

  useEffect(() => {
    const fetchValidators = async () => {
      const result = await axios.get('https://beaconcha.in/api/v1/validator/leaderboard');
      setValidators(result.data.data.slice(0, 10));
    };
    fetchValidators();
  }, []);

  return (
    <aside className="sidebar">
      <Link className="sidebar-link" to="/Validator">Validator search</Link>
      {validators.map(validator => (
        <Link className="sidebar-link" key={validator.validatorindex} to={`/Validator/${validator.validatorindex}`}>
          {validator.validatorindex}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
