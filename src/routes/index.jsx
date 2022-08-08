import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom';

const AuthGuard = lazy(() => import('../guards/auth.guard'));
const NoAuthGaurd = lazy(() => import('../guards/no-auth.guard'));
const AdminLayout = lazy(() => import('../layouts/admin'));
const HomeLayout = lazy(() => import('../layouts/home'));
const Booking = lazy(() => import('../modules/booking/booking'));
const HomePage = lazy(() => import('../pages/home/home'));
const Login = lazy(() => import('../pages/login/login'));
const MovieManagement = lazy(() => import('../pages/movieManagement/movieManagement'));
const MovieDetailPage = lazy(() => import('../pages/movieDetail/movieDetail'));
const AdminGuard = lazy(() => import('../guards/admin.guard'));


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
