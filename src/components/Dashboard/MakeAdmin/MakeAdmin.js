import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useRef } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
       
        const user = { email };
        fetch('https://glacial-reef-73275.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                   
                }
            })

        e.preventDefault()
    }
    return (
        <div >
            
           
            <div className="limiter book-limiter">
        <div className="container-login100 align-items-start py-0">
          <div className="wrap-login100">
          <h2>Make an Admin</h2><br />
          <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '100%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <br />
                    <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}

          </div>
        </div>
      </div>
        
        </div>
    );
};

export default MakeAdmin;