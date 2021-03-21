// -- imports
import React from 'react';
import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';
import {
    StoreMallDirectoryOutlined,
    FitnessCenterOutlined,
    HomeOutlined,
    ExitToAppOutlined,
} from '@material-ui/icons';

// -- internal components
import NavigationItem from '../../atoms/NavigationItem/NavigationItem';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import {signOut} from '../../../api/users-api'
import { logout } from '../../../store/actions';

// * -- COMPONENT
function NavigationItems({ sideDrawer }) {
    // Access the client
    const queryClient = useQueryClient()
    const { isLoggedIn } = useSelector((state) => state.user);
    const inSideDrawer = !!sideDrawer;
    const { mutateAsync } = useMutation(signOut);
    const dispatch = useDispatch();

    const onLogoutHandler = async () => {
        try {
            await mutateAsync();
            await dispatch(logout());
            queryClient.removeQueries('checkAuth', { exact: true })
        } catch (err) {}
    }

    return (
        <StyledList component="nav" sideDrawer={sideDrawer}>
            {inSideDrawer && (
                <NavigationItem
                    key="home"
                    title="home"
                    path="/home"
                    icon={<HomeOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                    inSideDrawer={inSideDrawer}
                />
            )}
            <NavigationItem
                key="achivements"
                title="achivements"
                path="/achivements"
                icon={<StoreMallDirectoryOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                inSideDrawer={inSideDrawer}
            />
            <NavigationItem
                key="shop"
                title="shop"
                path="/shop"
                icon={<FitnessCenterOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                inSideDrawer={inSideDrawer}
            />
            {!isLoggedIn && (
                <NavigationItem
                    key="authenticate"
                    title="authenticate"
                    path="/authenticate"
                    icon={<ExitToAppOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                    inSideDrawer={inSideDrawer}
                />
            )}
            {isLoggedIn && (
                <NavigationItem
                    key="logout"
                    title="logout"
                    path="/logout"
                    state={{success: true, message: 'Successful Logout'}}
                    icon={<ExitToAppOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                    inSideDrawer={inSideDrawer}
                    onClick={onLogoutHandler}
                />
            )}
        </StyledList>
    );
}

// -- styled components
const StyledList = styled(({ sideDrawer, ...props }) => <List {...props} />)`
    && {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;

        font-size: 2rem;

        ${(props) =>
            props.sideDrawer &&
            css`
                flex-direction: column;
                justify-content: space-evenly;
                width: auto;
                height: 100%;
            `}
    }
`;

export default React.memo(NavigationItems);
