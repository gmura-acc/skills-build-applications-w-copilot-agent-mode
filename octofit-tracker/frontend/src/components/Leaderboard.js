import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Fetched Leaderboard:', results);
      })
      .catch(err => {
        console.error('Error fetching leaderboard:', err);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  if (loading) return <div className="text-center my-4">Loading Leaderboard...</div>;

  if (!leaders.length) return <div className="alert alert-info mt-4">Nessun dato in classifica.</div>;

  const columns = leaders.length > 0 ? Object.keys(leaders[0]) : [];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 display-6">Leaderboard</h2>
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
                {leaders.map((leader, idx) => (
                  <tr key={leader.id || idx}>
                    {columns.map(col => <td key={col}>{String(leader[col])}</td>)}
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

export default Leaderboard;
