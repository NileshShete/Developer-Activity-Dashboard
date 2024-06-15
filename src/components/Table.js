import React from 'react';
import { Table } from 'antd';
import { TableContainer } from '../styled';
import { getColumns } from './tableData';

const columns = getColumns();

const processTableData = (rows) => {
    return rows.map(row => {
        const rowData = { name: row.name };
        row.totalActivity.forEach(activity => {
            rowData[activity.name] = activity.value;
        });
        return rowData;
    });
};

const TableData = ({ data }) => (
    <TableContainer>
        <Table
            dataSource={processTableData(data)}
            columns={columns}
            rowKey="name"
            pagination={false}
        />
    </TableContainer>
);

export default TableData;
