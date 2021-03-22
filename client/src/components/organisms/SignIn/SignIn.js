// -- imports
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import {
    Avatar,
    Button,
    Dialog,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    useTheme,
} from '@material-ui/core';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

// -- internal components/imports
import { signIn } from '../../../api/users-api';
import Loader from '../../molecules/Loader/Loader';
import { parseServerError } from '../../../shared/utils';
import { login } from '../../../store/actions';

// -- validation rules
const validationRules = {
    email: { required: 'Email is required' },
    password: {
        required: 'Password is required',
    },
};

function SignIn({ handleChange }) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, errors } = useForm({});
    const { mutateAsync, isLoading, isError, error } = useMutation(signIn);
    const serverError = isError && !!error?.response;
    const networkError = isError && !error?.response;

    const onFormSubmit = async (data) => {
        try {
            await mutateAsync(data);
            await dispatch(login());
            history.push({
                pathname: '/home',
                state: {
                    success: true,
                    message: 'Successful Signin',
                },
            });
        } catch (err) {}
    };

    const toggleShowPasswordHandler = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>  
            {networkError && <Dialog type="error" />}
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
                    <Grid item>
                        {serverError && (
                            <FormHelperText error>
                                {parseServerError(error.response.data.errors)}
                            </FormHelperText>
                        )}
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
