import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchValidatorLeaderboard } from '../api/api';

const Sidebar = () => {
  const [validators, setValidators] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
        const leaderboard = await fetchValidatorLeaderboard();
        setValidators(leaderboard.slice(0, 10));
    };
    getLeaderboard();
  }, []);

  return (
    <aside className="sidebar">
      <Link className="sidebar-link" to="/Validator">Validator search</Link>
      {validators.map(validator => (
        <ul>
          <li>
            <Link className="sidebar-link" key={validator.validatorindex} to={`/Validator/${validator.validatorindex}`}>
              {validator.validatorindex}
          </Link>
          </li>
        </ul>
        
      ))}
    </aside>
  );
};

export default Sidebar;
