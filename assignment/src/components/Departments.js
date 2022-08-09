import React from 'react';
import DataTable from 'react-data-table-component'

const columns = [
    {
        name: 'Departments',
        selector: row => row.department,
        sortable: true
    },
    {
        name: 'No of Employees',
        selector: row => row.employees,
        sortable: true
    }
]

const Data = [
    {
        id: 1,
        department: "Finance",
        employees: 123
    },
    {
        id: 2,
        department: "Technical",
        employees: 153
    },
    {
        id: 3,
        department: "Sales",
        employees: 345
    },
    {
        id: 4,
        department: "Quality",
        employees: 183
    }
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
}

const Department = () => {
    return (
        <div className="pt-8">
            <div className="flex justify-center md:w-6/12 md:ml-56 border-slate-500 border-2 p-2">
            <DataTable
            columns={columns}
            data={Data}
            customStyles={customStyles}
            />
            </div>
        </div>
        
    )
}
export default Department;