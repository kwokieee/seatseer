import React, { useEffect } from 'react';
import Screen from '../misc_components/Screen';
import { ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { setStateToLoggedIn, setStateToLoggedOut, setStateToEmailNotVerified } from '../store/slices/authSlice';
import { setOnAuthStateChanged, setOnUserEmailVerifiedChanged } from '../api/auth';

export default function MainScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        setOnAuthStateChanged(
            // onUserAuthenticated callback function
            (user) => {
                setOnUserEmailVerifiedChanged(
                    () => {
                        dispatch(setStateToLoggedIn({ displayName: user.displayName, email: user.email }));
                    },
                    () => {
                        dispatch(setStateToEmailNotVerified());
                    }
                )
                
            },
            // onUserNotFound callback function
            () => {
                dispatch(setStateToLoggedOut());
            }
        );
    });

    return (
        <Screen>
            <ActivityIndicator size="large" />
        </Screen>
    );
}