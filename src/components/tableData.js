
const getColumns = () =>
    [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'PR Open',
            dataIndex: 'PR Open',
            key: 'PR Open'
        },
        {
            title: 'PR Merged',
            dataIndex: 'PR Merged',
            key: 'PR Merged'
        },
        {
            title: 'Commits',
            dataIndex: 'Commits',
            key: 'Commits'
        },
        {
            title: 'PR Reviewed',
            dataIndex: 'PR Reviewed',
            key: 'PR Reviewed'
        },
        {
            title: 'PR Comments',
            dataIndex: 'PR Comments',
            key: 'PR Comments'
        },
        {
            title: 'Incident Alerts',
            dataIndex: 'Incident Alerts',
            key: 'Incident Alerts'
        },
        {
            title: 'Incidents Resolved',
            dataIndex: 'Incidents Resolved',
            key: 'Incidents Resolved'
        }
    ];

export { getColumns };
