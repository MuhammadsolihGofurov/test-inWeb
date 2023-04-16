import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { toggleLoadingFalse, toggleLoadingTrue } from '../../redux/slices/settings';

export default function Loading() {

    const { pathname } = useLocation();
    const { loading } = useSelector(state => state.settings);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(toggleLoadingFalse())
        }, 1500);
        dispatch(toggleLoadingTrue());
    }, [pathname]);

    return (
        <>
            {
                loading && <div className="loading">
                    <div className="loading__content">
                        <p className="text white base" style={{ padding: '1rem 0' }}>
                            Пожалуйста, подождите...
                        </p>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            }
        </>
    )
}
