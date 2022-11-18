import { createBrowserRouter } from "react-router-dom";
import Login from "../components/users/Login";
import Container from "../layouts/Container";
import FullLayout from "../layouts/FullLayout";
import MainLayout from "../layouts/MainLayout";
import Files from "../pages/files/Files";
import Messages from "../pages/messages/Messages";
import UserRegistration from "../pages/users/UserRegistration";
import ViewAllUsers from "../pages/users/ViewAllUsers";

const router = createBrowserRouter([
    {
        path: '',
        element: <FullLayout />,
        children: [
            {
                path: '',
                element: <Login />
            }
        ]
    },
    {
        path: 'lockbox',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Container />,
                children: [
                    {
                        path: 'files',
                        element: <Files />
                    },
                    {
                        path: 'messages',
                        element: <Messages />
                    },
                    {
                        path: 'users',
                        element: <ViewAllUsers />
                    },
                    {
                        path: 'users/register',
                        element: <UserRegistration />
                    }
                ]
            }
        ]
    }
]);

export default router