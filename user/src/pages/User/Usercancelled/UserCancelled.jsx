import React from 'react';

import Navbar from "../../../components/Navbar/Navbar.jsx";
import Sidebar from "../../../components/UserSidebar/Sidebar.jsx";
import "../../../components/Table-user/Table-user.css";
import UserDataBox from "../component/UserdataBox.jsx";
//import useFetch from "../../../Hooks/useFetch.js";
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../datatablesource.js';

export default function UserCancelled() {

    //const {data,loading,error} = useFetch("/event?status=Cancelled");
    const data = [
      { _id: '1', name: 'Event 1', status: 'Cancelled' },
      { _id: '2', name: 'Event 2', status: 'Cancelled' },
      { _id: '3', name: 'Event 3', status: 'Cancelled' },
      { _id: '4', name: 'Event 4', status: 'Cancelled' },
    ];
    const loading = false;
  return (
    <div>
        <Navbar/>
        <Sidebar/>

        <div style={{ height: 400, width: '100%' }} className="Table-user">
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
            <div className='listTitle'>Events</div>

                <div className='in-nav'>
                    <ul>
                    <li>
                          <Link to="/" style={{color:'inherit', textDecoration:"none"}}><h6>Pending</h6></Link>
                        </li>
                        <li>
                          <Link to="approved" style={{color:'inherit', textDecoration:"none"}}><h6>Approved</h6></Link>
                        </li>
                        <li>
                          <Link to="declined" style={{color:'inherit', textDecoration:"none"}}><h6>Declined</h6></Link>
                        </li>
                        <li>
                        <Link to="declined" style={{color:'inherit', textDecoration:"none"}}><h6>Cancelled</h6></Link>
                        </li>
                    </ul>
                </div>

            {loading ? (
                "Loading"
            ) : (
                <>
                    <DataGrid
                    rows={data}
                    columns={userColumns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    getRowId={row=>row._id}
                    />
                </>
            )}
            
        </div>
      </div>
    </div>

    <UserDataBox/>
    </div>
  )
}
