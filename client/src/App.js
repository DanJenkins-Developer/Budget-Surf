import './App.css';
import DonutChart from 'react-donut-chart';
import axios from 'axios'
import BudgetCard from './components/BudgetCard';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            {/* <Route path='/budget' element={<BudgetCard name="Food" amount={201} max={400}/>}/> */}
            <Route path='/donut' element={<DonutChart
                data={[
                  {
                    label: 'Food',
                    value: 25,
                  },
                  {
                    label: 'Entertainment',
                    value: 25,
                  },
                  {
                    label: 'Savings/Investments',
                    value: 25,
                  },
                  {
                    label: 'Housing',
                    value: 25,
                  },
                  {
                    label: 'Transportation',
                    value: 25,
                  },
                  {
                    label: 'Miscellaneous',
                    value: 25,
                  },
                ]}
              />}/>       
          </Routes>
          </div>
  );
}

export default App;
