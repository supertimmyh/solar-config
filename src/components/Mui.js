import * as React from 'react';
import { Controller } from 'react-hook-form';
import {
  TextField,
  Checkbox,
  ThemeProvider,
  Slider
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple
  }
});

const Mui = ({ control }) => (
  <ThemeProvider theme={theme}>
    <section>
      <label>Annual kWh Cap</label>
      <Controller
        name="annualCap"
        control={control}
        render={({ field }) => (
          <Checkbox
            onChange={(e) => field.onChange(e.target.checked)}
            checked={field.value}
          />
        )}
      />
    </section>
      
    <section>
      <Controller
        render={({ field }) => <TextField
          {...field}
          label="Credit Compensation"
          sx={{ m: 1, width: '25ch' }}
        />}
        name="creditCompensation"
        control={control}
      />
    </section>
          
    <section>
      <Controller
        render={({ field }) => <TextField
          {...field}
          label="Import Reate ($/kWh)"
          sx={{ m: 1, width: '25ch' }}
        />}
        name="importRate"
        control={control}
      />
    </section>
          
    <section>
      <Controller
        render={({ field }) => <TextField
          {...field}
          label="Export Rate ($/kWh)"
          sx={{ m: 1, width: '25ch' }}
        />}
        name="exportRate"
        control={control}
      />
    </section>
          
    <section>
      <Controller
        render={({ field }) => <TextField
          {...field}
          label="Monthly Fee ($)"
          sx={{ m: 1, width: '25ch' }}
        />}
        name="monthlyFee"
        control={control}
      />
    </section>
          
    <section>
      <Controller
        render={({ field }) => <TextField
          {...field}
          label="Escalation Rate"
          sx={{ m: 1, width: '25ch' }}
        />}
        name="escalationRate"
        control={control}
      />
    </section>
          
    <section>
        <label>Monthly Average Bill</label>
        <Controller
          name="monthlyAvgBill"
          control={control}
          defaultValue={200}
          render={({ field }) => (
            <Slider
              {...field}
              onChange={(_, value) => {
                field.onChange(value);
              }}
              valueLabelDisplay="auto"
              max={1000}
              step={10}
            />
          )}
        />
      </section>
      <hr />
      <section>
        <label>Enter your account number to pull data</label>
      </section>
  </ThemeProvider>
);

export default Mui