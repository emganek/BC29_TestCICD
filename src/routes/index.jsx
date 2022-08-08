import React from 'react'
import { useRoutes } from 'react-router-dom';
import AuthGuard from '../guards/auth.guard';
import NoAuthGaurd from '../guards/no-auth.guard';
import AdminLayout from '../layouts/admin';
import HomeLayout from '../layouts/home';
import Booking from '../modules/booking/booking';
import HomePage from '../pages/home/home';
import Login from '../pages/login/login';
import MovieManagement from '../pages/movieManagement/movieManagement';
import MovieDetailPage from '../pages/movieDetail/movieDetail';
import AdminGuard from '../guards/admin.guard';

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/home',
                    element: <HomePage />,
                },
                {
                    path: '/movie/:movieID',
                    element: <MovieDetailPage />,
                },
                {
                    path: '/',
                    element: <NoAuthGaurd />,
                    children: [
                        {
                            path: '/login',
                            element: <Login />,
                        },
                    ]
                },
                {
                    path: '/',
                    element: <AuthGuard />,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />,
                        },
                    ]
                },
            ],
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    path: '/admin',
                    element: <AdminGuard />,
                    children: [
                        {
                            path: '/admin/movie-management',
                            element: <MovieManagement />,
                        },
                    ]
                },
            ],
        },
    ])

    return routing
}
