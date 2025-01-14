import React from 'react'
import "./Table.css";
//import useFetch from "../../Hooks/useFetch.js"
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatablesource';


export default function Table() {

    //const {data,loading,error} = useFetch("/event?status=Approved");
    const data=[5,8,2,6];
    const loading = false;
  return (

    <div style={{ height: 400 }} className="Table-admin">
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
            <MDBRow>
                <MDBCol>
            <div className='listTitle'>Events</div>
            <div className='checkevents'>Check</div>
                </MDBCol>
                <MDBCol>

                <div className='in-nav'>
                    <ul>
                        <li>
                            <h6>Pending</h6>
                        </li>
                        <li>
                            <h6>Approved</h6>
                        </li>
                        <li>
                            <h6>Declined</h6>
                        </li>
                        <li>
                            <h6>Declined</h6>
                        </li>
                    </ul>
                </div>
            
                    </MDBCol>
           

            
            </MDBRow>
           

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
  )
}


/*
<TableContainer component={ Paper } className="table">
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Event Description</TableCell>
                        <TableCell className="tableCell">Venue</TableCell>
                        <TableCell className="tableCell">Equipment</TableCell>
                        <TableCell className="tableCell">Time</TableCell>
                        <TableCell className="tableCell">Duration</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">
                                <div classname="cellWrap">
                                    {row.date}
                                    {row.month}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                <div classname="cellWrapDesc">
                                    {row.descHead}
                                    {row.descBody}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.venue}</TableCell>
                            <TableCell className="tableCell">{row.equipment}</TableCell>
                            <TableCell className="tableCell">{row.time}</TableCell>
                            <TableCell className="tableCell">{row.duration}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>







<div className='listTitle'>Events</div>
        <div className='in-nav'>
            <ul>
                <li>
                    <h6>Pending</h6>
                </li>
                <li>
                    <h6>Approved</h6>
                </li>
                <li>
                    <h6>Declined</h6>
                </li>
            </ul>
        </div>

*/
