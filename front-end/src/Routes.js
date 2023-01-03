import React from 'react'

const Routes = () => {
    let element = useRoutes([
        {
          path: "/",
          element: <Dashboard />,
          children: [
            {
              path: "messages",
              element: <DashboardMessages />,
            },
            { path: "tasks", element: <DashboardTasks /> },
          ],
        },
        { path: "team", element: <AboutPage /> },
      ]);
    
      return element;
}

export default Routes