import React from 'react';
import DataTable from 'react-data-table-component'

const columns = [
    {
        name: 'Employee Id',
        selector: row => row.id,
        sortable: true
    },
    {
        name: 'Employee Photo',
        selector: row => row.photo,
        sortable: true
    },
    {
        name: 'Designation',
        selector: row => row.designation,
        sortable: true
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true
    },
    {
        name: 'Date of Joining',
        selector: row => row.joining,
        sortable: true
    },
]

const Data = [
    {
        id: 1,
        photo: "Finance",
        designation: "Junior Trainee",
        department: "Finance",
        joining: "23/04/2002"
    },
    {
        id: 2,
        photo: "Finance",
        designation: "Junior Trainee",
        department: "Finance",
        joining: "23/04/2002"
    },
    {
        id: 2,
        photo: "Finance",
        designation: "Junior Trainee",
        department: "Finance",
        joining: "23/04/2002"
    },
    {
        id: 4,
        photo: "Finance",
        designation: "Junior Trainee",
        department: "Finance",
        joining: "23/04/2002"
    },
    {
        id: 5,
        photo: "Finance",
        designation: "Junior Trainee",
        department: "Finance",
        joining: "23/04/2002"
    },
    {
        id: 6,
        photo: "Finance",
        designation: "Junior Trainee",
        department: "Finance",
        joining: "23/04/2002"
    },
]

const customStyles = {
  headCells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
            background: 'gray',
            color: '#f1f1f1',
        },
    },
    cells: {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        },
    },
}

const handleModal = () => {
    document.getElementById("modal").style.display = 'block'
}
const handleClose = () => {
    document.getElementById("modal").style.display = 'none'
}
const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center align-middle mt-5 mb-7">
            <h1 className="font-extralight mr-4">Create Employee :</h1>    
            <button onClick={handleModal} className="border-slate-900 rounded-xl bg-gray-600 font-thin p-1 text-gray-200 hover:text-gray-50">Add New Employee</button>
            </div>
            <div id='modal' className="hidden fixed z-10 top-52 left-1/4 w-6/12 h-full overflow-auto mt">
                <div className="bg-zinc-400 m-2 p-5 border-gray-50 w-10/12 md:w-7/12 flex flex-col">
                    <h4 className='text-white font-extralight text-center'>Create New Employee <span className="border-2 rounded-full pl-1 pr-1 float-right hover:text-zinc-50 cursor-pointer" onClick={handleClose}>&times;</span></h4>
                    <input type='text' placeholder='Enter employee name' className='border border-gray-400 rounded-lg p-1'/>
                    <input type='text' placeholder='Enter employee designation' className='border border-gray-400 rounded-lg p-1'/>
                    <input type='text' placeholder='Enter employee department' className='border border-gray-400 rounded-lg p-1'/>
                    <input type='text' placeholder='Enter employee date of joining' className='border border-gray-400 rounded-lg p-1'/>
                    <div className='flex justify-center mt-5'>
                    <button className="border-2 rounded-xl text-white w-3/12">Submit</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-wrap overflow-auto md:w-7/12 md:ml-56 border-slate-500 border-2 p-2">
            <DataTable
            columns={columns}
            data={Data}
            customStyles={customStyles}
            selectableRows
            />
            </div>
        </div>
        
    )
}
export default Dashboard;