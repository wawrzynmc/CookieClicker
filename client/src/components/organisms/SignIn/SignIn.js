import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
    Avatar,
    Button,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    useTheme,
} from '@material-ui/core';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { useMutation } from 'react-query';
import { signIn } from '../../../api/users-api';
import Loader from '../../molecules/Loader/Loader';

function SignIn({ handleChange }) {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, errors } = useForm({});
    const { mutate, isLoading, isError, error, isSuccess } = useMutation(signIn);

    // TODO: do something if isSuccess (redirect to main page)

    const validationRules = {
        email: { required: 'Email is required' },
        password: {
            required: 'Password is required',
        },
    };

    console.log(error);

    const toggleShowPasswordHandler = () => {
        setShowPassword((prev) => !prev);
    };

    const onFormSubmit = (data) => {
        console.log(data);
        mutate(data);
    };
    return (
        <>
            {isLoading && <Loader />}
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
                <Grid
                    component="form"
                    container
                    item
                    direction="column"
                    spacing={2}
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <Grid item>
                        <Controller
                            name="email"
                            control={control}
                            rules={validationRules.email}
                            defaultValue=""
                            render={(props) => (
                                <TextField
                                    id="email"
                                    label="email"
                                    type="email"
                                    color="secondary"
                                    size="small"
                                    helperText={errors.email && errors.email.message}
                                    onChange={(e) => props.onChange(e.target.value)}
                                    value={props.value}
                                    fullWidth
                                    error={!!errors.email}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            name="password"
                            control={control}
                            rules={validationRules.password}
                            defaultValue=""
                            render={(props) => (
                                <TextField
                                    id="password"
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
                                                    {showPassword ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => props.onChange(e.target.value)}
                                    value={props.value}
                                    helperText={errors.password && errors.password.message}
                                    error={!!errors.password}
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>{isError && <FormHelperText error></FormHelperText>}</Grid>
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
                            <Link to="#" onClick={() => handleChange('event', 1)}>
                                Don't have an account? {''}
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default SignIn;
