import DonutChart from 'react-donut-chart';
import './App.css';
import BudgetCard from './BudgetCard';

function App() {
  return (
    <div className="App">
        <h2>Pie Chart Test</h2>
        
        <DonutChart
          data={[
            {
              label: 'Give you up',
              value: 25,
            },
            {
              label: '',
              value: 75,
              isEmpty: true,
            },
          ]}
      />;
        
        <BudgetCard name="Food" amount={30} max={40}/>

    </div>
    
  );
}

export default App;
