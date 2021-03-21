// -- imports
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import { List } from '@material-ui/core';
import {
    StoreMallDirectoryOutlined,
    FitnessCenterOutlined,
    HomeOutlined,
    ExitToAppOutlined,
} from '@material-ui/icons';

// -- internal components/imports
import NavigationItem from '../../atoms/NavigationItem/NavigationItem';
import { signOut } from '../../../api/users-api';
import { logout } from '../../../store/actions';
import { CHECK_AUTH } from '../../../api/queries/queries-keys';

// * -- COMPONENT
function NavigationItems({ sideDrawer }) {
    const queryClient = useQueryClient();
    const { isLoggedIn } = useSelector((state) => state.user);
    const inSideDrawer = !!sideDrawer;
    const { mutateAsync } = useMutation(signOut);
    const dispatch = useDispatch();

    const onLogoutHandler = async () => {
        try {
            await mutateAsync();
            await dispatch(logout());

            // -- clear cache
            queryClient.removeQueries(CHECK_AUTH, { exact: true });
        } catch (err) {}
    };

    return (
        <StyledList component="nav" sideDrawer={sideDrawer}>
            {inSideDrawer && (
                <NavigationItem
                    title="home"
                    path="/home"
                    icon={<HomeOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                    inSideDrawer={inSideDrawer}
                />
            )}
            <NavigationItem
                title="achivements"
                path="/achivements"
                icon={<StoreMallDirectoryOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                inSideDrawer={inSideDrawer}
            />
            <NavigationItem
                title="shop"
                path="/shop"
                icon={<FitnessCenterOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                inSideDrawer={inSideDrawer}
            />
            {!isLoggedIn && (
                <NavigationItem
                    title="authenticate"
                    path="/authenticate"
                    icon={<ExitToAppOutlined color="secondary" style={{ fontSize: '2rem' }} />}
                    inSideDrawer={inSideDrawer}
                />
            )}
            {isLoggedIn && (
                <NavigationItem
                    title="logout"
                    path="/logout"
                    state={{ success: true, message: 'Successful Logout' }}
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
