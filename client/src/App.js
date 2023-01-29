import './App.css';
import DonutChart from 'react-donut-chart';
import BudgetCard from './BudgetCard';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/donut' element={<DonutChart
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
              />}/>       
            <Route path='/budget' element={<BudgetCard name="Food" amount={201} max={400}/>}/>
          </Routes>
          </div>
  );
}

export default App;
