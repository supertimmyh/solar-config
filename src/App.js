// import logo from './logo.svg';
import './App.css';
import { 
  Grid,
  Button
} from '@mui/material';
import { useForm } from "react-hook-form";
import Mui from "./components/Mui"
import Gbc from "./components/GreenButtonConnect"
import SolarPanelsWidget from './components/SolarPanelsWidget';

const defaultValues = {
  Native: "",
  TextField: "",
  Select: "",
  numberFormat: 123456789,
};

function App() {
  const { control } = useForm({ defaultValues });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solar Data AI ShowCase
        </a>
      </header>
      <Grid 
        container spacing={2}
        justifyContent="space-between"
        sx={{ width: 1000 }} m={2}
      >
        <Grid item xs={4}>
          <Mui control={control} />
          <Gbc />
        </Grid>
        <Grid item xs={8}>
          <div className='map'>
            <SolarPanelsWidget />
          </div>
        </Grid>
      </Grid>
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default App;
