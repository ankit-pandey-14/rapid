import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import * as ROUTES from '../constants/routes';


const ContainerParent = React.lazy(() => import('../components/containerParent'));
const HomeScreen = React.lazy(() => import('../screens/HomeScreen'));
const ContactScreen = React.lazy(() => import('../screens/ContactScreen'));
const TaskScreen = React.lazy(() => import('../screens/TaskScreen'));

const GuestRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path={ROUTES.HOME} element={ <ContainerParent /> }>
                    <Route path={ROUTES.HOME} element={ <HomeScreen /> } />
                    <Route path={ROUTES.CONTACT} element={ <ContactScreen /> } />
                    <Route path={ROUTES.TASK} element={ <TaskScreen /> } />
                </Route>

                <Route path='*' element={ <Navigate to={ROUTES.HOME} /> } />
            </Routes>
        </React.Suspense>
    );
}

export default GuestRoutes;