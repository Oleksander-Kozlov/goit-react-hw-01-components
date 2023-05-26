export const StatisticsList = ({ data }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(dat => {
          return (
            <li key={dat.id}>
              <span className="label"> {dat.label}</span>
              <span className="percentage"> {dat.percentage}</span>
            </li>
          );
        }
          )}
        
      </ul>
    </section>
  );
};