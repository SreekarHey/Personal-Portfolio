import { Route, Navigate, Routes } from 'react-router-dom';

import { DashboardLayout } from '../shared/components/DashboardLayout/DashboardLayout';
import { Home } from '../views/Home/Home';
import { About } from '../views/About/About';
import { Dashboard } from '../views/Dashboard/Dashboard';

export const MainRouter = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
            </Routes>
        </DashboardLayout>
    );
};
