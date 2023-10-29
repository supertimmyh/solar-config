import React from 'react';
import { 
  useForm, 
  Controller 
} from 'react-hook-form';
import {
  Checkbox,
  TextField,
} from "@mui/material";

function GreenButtonConnect() {
  const { control, watch } = useForm();
  const hasUtilityAccount = watch('hasUtilityAccount');
  let authorizationStatement = `I, Jane Doe, am the owner of the utility
  accounts(s) above, and, in accordance with
  Green Button Connect's Terms of Service and Privacy
  Policies, I authorize ABC Inc. to:
  - Login to the above account(s) on my behalf
  - Collect billing and usage history from my account(s)
  - Share the collected data only with XYZ Inc`

  return (
    <div>
      <section>
        <label>
          <Controller
            name="hasUtilityAccount"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}
          />
          You have a XYZ utility account and would share the data with us
        </label>
      </section>
      
      {hasUtilityAccount && (
        <section>
          <section>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => <TextField 
              {...field} 
              label="Email"
              sx={{ m: 1, width: '25ch' }} 
              />}
            />
          </section>

          <section>
            <Controller
              name="accountNumber"
              control={control}
              defaultValue=""
              rules={{ required: "Account Number is required" }}
              render={({ field }) => <TextField 
                {...field} 
                label="Account Number"
                sx={{ m: 1, width: '25ch' }} 
              />}
            />
          </section>
          <section>
          <label>
            <Controller
              name="authorizationStatement"
              control={control}
              defaultValue={false}
              rules={{ required: "Authorization Statement is required" }}
              render={({ field }) => (
                <Checkbox
                  onChange={(e) => field.onChange(e.target.checked)}
                  checked={field.value}
                />
              )}
            />
            Authorization Statement:
            <br/>
            {authorizationStatement}
          </label>
          </section>
        </section>
      )}
    </div>
  );
}

export default GreenButtonConnect;
