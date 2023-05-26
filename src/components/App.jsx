import user from '../json/user.json'
import { Profile } from './Profile';
import data from '../json/data.json';
import { StatisticsList } from './Statistics';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <StatisticsList data={data} />
    </div>
  );
};
