//import logo from './logo.svg';
import './App.css';
import user from './user.json';
import statisticalData from './statistical-data.json'
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';

console.log('user', user);

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </>
  );
}

export default App;
