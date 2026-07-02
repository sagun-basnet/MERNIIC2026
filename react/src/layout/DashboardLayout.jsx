import React from 'react'

const DashboarLayout = () => {
    return (
      <>
        <Topbar />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
  };

export default DashboardLayout