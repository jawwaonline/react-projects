import { TwitterFollowerList } from './components/TwitterFollowerList.jsx';
import { TwitterFollowerStripe } from './components/TwitterFollowerStripe.jsx';

const TEST_USER = [
  {
    username: 'elonmusk',
    realname: 'Elon Musk',
    following: true,
  },
  {
    username: 'midudev',
    realname: 'Miguel Ángel Duran',
    following: false,
  },
  {
    username: 'pheralb',
    realname: 'Pablo H.',
    following: false,
  },
];

function App() {
  return (
    <>
      <TwitterFollowerList userlist={TEST_USER} />
    </>
  );
}

export default App;
