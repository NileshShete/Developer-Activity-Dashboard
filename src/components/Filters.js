import React from 'react';
import { Select } from 'antd';
import { FilterContainer } from '../styled';

const { Option } = Select;

const Filters = (props) => {
    const { onFilterChange } = props
    const handleFilterChange = (value) => {
        onFilterChange(value);
    };

    return (
        <FilterContainer>
            <Select
                defaultValue="all"
                style={{ width: 200 }}
                onChange={handleFilterChange}
            >
                <Option value="all">All</Option>
                <Option value="PR Open">PR Open</Option>
                <Option value="PR Merged">PR Merged</Option>
                <Option value="Commits">Commits</Option>
                <Option value="PR Reviewed">PR Reviewed</Option>
                <Option value="PR Comments">PR Comments</Option>
                <Option value="Incident Alerts">Incident Alerts</Option>
                <Option value="Incidents Resolved">Incidents Resolved</Option>
            </Select>
        </FilterContainer>
    );
};

export default Filters;
