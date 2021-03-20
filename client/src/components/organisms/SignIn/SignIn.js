import {
    Avatar,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
    useTheme,
} from '@material-ui/core';
import { AccountCircle, LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn({ handleChange }) {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPasswordHandler = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            spacing={1}
            style={{ padding: '15px' }}
        >
            <Grid item>
                <Avatar style={{ backgroundColor: theme.palette.primary.main }}>
                    <LockOutlined />
                </Avatar>
            </Grid>
            <Grid component="form" container item direction="column" spacing={2}>
                <Grid item>
                    <TextField
                        id="email"
                        label="email"
                        type="email"
                        color="secondary"
                        size="small"
                        helperText="error"
                        fullWidth
                        autoFocus
                        required
                        error
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="password"
                        helperText="error"
                        label="password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        color="primary"
                                        onClick={toggleShowPasswordHandler}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        size="large"
                        style={{ fontSize: '1rem' }}
                    >
                        sign in
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                        <Link href="#" onClick={() => handleChange('event', 1)}>
                            Don't have an account? {''}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignIn;
