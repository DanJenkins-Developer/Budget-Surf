import DonutChart from 'react-donut-chart';
import './App.css';
import BudgetCard from './BudgetCard';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Login />
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
