import { PieChart } from 'react-minimal-pie-chart';
import './App.css';

function App() {
  return (
    <div className="App">
        <h2>Pie Chart Test</h2>
        <PieChart
          radius={30}
          center={[50,50]}
          data={[
            { title: 'One', value: 10, color: '#E38627'},
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
    </div>
    
  );
}

export default App;
