import DonutChart from 'react-donut-chart';
import './App.css';
import BudgetCard from './BudgetCard';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
      <Router>
        <div className="App">
          <Routes>
            <Route path='/'>
              <Login />
            </Route>
            <Route>
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
                  }
                ]}
              />
            </Route>
            <BudgetCard name="Food" amount={30} max={40}/>
          </Routes>
          </div>
        </Router>
  );
}

export default App;
