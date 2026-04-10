import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched Teams:', results);
      })
      .catch(err => {
        console.error('Error fetching teams:', err);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  if (loading) return <div className="text-center my-4">Loading Teams...</div>;

  if (!teams.length) return <div className="alert alert-info mt-4">Nessun team trovato.</div>;

  const columns = teams.length > 0 ? Object.keys(teams[0]) : [];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 display-6">Team</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  {columns.map(col => <th key={col}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {teams.map((team, idx) => (
                  <tr key={team.id || idx}>
                    {columns.map(col => <td key={col}>{String(team[col])}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
