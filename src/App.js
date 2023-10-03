import {useState} from 'react';
import List from './list'
import "./app.css";
function App() {
  const data = [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    }
  ]
  const [people,setData] = useState(data);
  return (
    <main>
		  <section class="section">
      <h1>{people.length} Birthday Today</h1>
        <List people={people}></List>
        <button onClick={e=> setData([])}>Clear All</button>
      </section>
    </main>
  );
}
export default App;
