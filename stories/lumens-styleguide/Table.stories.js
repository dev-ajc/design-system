import React from 'react';


export default {
    title: 'Styleguide/Table',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Tables for displaying structured data',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'striped', 'bordered', 'borderless', 'hover'],
            description: 'Visual style variant of the table',
            defaultValue: 'default',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
            description: 'Size of the table cells',
            defaultValue: 'default',
        },
        responsive: {
            control: 'boolean',
            description: 'Whether the table should be horizontally scrollable on small screens',
            defaultValue: true,
        },
    },
};

// Sample data for the tables
const sampleData = {
    headers: ['ID', 'Name', 'Email', 'Role', 'Status'],
    rows: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Marketing', status: 'Active' },
        { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'Support', status: 'Pending' },
    ],
};

// Template for all table stories
const Template = ({ variant, size, responsive, withCaption = false }) => {
    // Create class names based on props
    const tableClasses = ['table'];
    if (variant && variant !== 'default') tableClasses.push(`table--${variant}`);
    if (size && size !== 'default') tableClasses.push(`table--${size}`);

    const table = (
        <table className={tableClasses.join(' ')}>
            {withCaption && (
                <caption className="table__caption">User Information Table</caption>
            )}
            <thead className="table__head">
                <tr className="table__row">
                    {sampleData.headers.map((header, index) => (
                        <th key={index} className="table__header">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="table__body">
                {sampleData.rows.map((row) => (
                    <tr key={row.id} className="table__row">
                        <td className="table__cell">{row.id}</td>
                        <td className="table__cell">{row.name}</td>
                        <td className="table__cell">{row.email}</td>
                        <td className="table__cell">{row.role}</td>
                        <td className="table__cell">{row.status}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot className="table__foot">
                <tr className="table__row">
                    <td className="table__cell" colSpan={2}>Footer</td>
                    <td className="table__cell" colSpan={3}>Additional information</td>
                </tr>
            </tfoot>
        </table>
    );

    // Wrap in responsive container if needed
    if (responsive) {
        return <div className="table-responsive">{table}</div>;
    }

    return table;
};

// Basic table
export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    size: 'default',
    responsive: true,
};
Default.parameters = {
    docs: {
        description: {
            story: 'The default table with standard styling.',
        },
    },
};

// Striped table
export const Striped = Template.bind({});
Striped.args = {
    variant: 'striped',
    size: 'default',
    responsive: true,
};
Striped.parameters = {
    docs: {
        description: {
            story: 'Table with alternating row background colors for better readability.',
        },
    },
};

// Bordered table
export const Bordered = Template.bind({});
Bordered.args = {
    variant: 'bordered',
    size: 'default',
    responsive: true,
};
Bordered.parameters = {
    docs: {
        description: {
            story: 'Table with borders around all cells for clear data separation.',
        },
    },
};

// Borderless table
export const Borderless = Template.bind({});
Borderless.args = {
    variant: 'borderless',
    size: 'default',
    responsive: true,
};
Borderless.parameters = {
    docs: {
        description: {
            story: 'Table without any borders for a minimal look.',
        },
    },
};

// Hover table
export const Hover = Template.bind({});
Hover.args = {
    variant: 'hover',
    size: 'default',
    responsive: true,
};
Hover.parameters = {
    docs: {
        description: {
            story: 'Table with hover effect on rows for better interaction.',
        },
    },
};

// Small table
export const Small = Template.bind({});
Small.args = {
    variant: 'default',
    size: 'sm',
    responsive: true,
};
Small.parameters = {
    docs: {
        description: {
            story: 'Compact table with smaller padding in cells.',
        },
    },
};

// Large table
export const Large = Template.bind({});
Large.args = {
    variant: 'default',
    size: 'lg',
    responsive: true,
};
Large.parameters = {
    docs: {
        description: {
            story: 'Spacious table with larger padding in cells.',
        },
    },
};

// Table with caption
export const WithCaption = Template.bind({});
WithCaption.args = {
    variant: 'default',
    size: 'default',
    responsive: true,
    withCaption: true,
};
WithCaption.parameters = {
    docs: {
        description: {
            story: 'Table with a caption that describes its content.',
        },
    },
};

// Combined features
export const Combined = Template.bind({});
Combined.args = {
    variant: 'striped',
    size: 'sm',
    responsive: true,
    withCaption: true,
};
Combined.parameters = {
    docs: {
        description: {
            story: 'Table combining multiple features: striped rows, small size, and caption.',
        },
    },
};

// Cell alignment example
export const CellAlignment = ({ responsive }) => {
    return (
        <div className={responsive ? 'table-responsive' : ''}>
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__header table__header--start">Left Aligned</th>
                        <th className="table__header table__header--center">Center Aligned</th>
                        <th className="table__header table__header--end">Right Aligned</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell table__cell--start">Left aligned content</td>
                        <td className="table__cell table__cell--center">Center aligned content</td>
                        <td className="table__cell table__cell--end">Right aligned content</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell table__cell--start">Left aligned content</td>
                        <td className="table__cell table__cell--center">Center aligned content</td>
                        <td className="table__cell table__cell--end">Right aligned content</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
CellAlignment.args = {
    responsive: true,
};
CellAlignment.parameters = {
    docs: {
        description: {
            story: 'Table with different cell content alignments.',
        },
    },
};

// Contextual row colors
export const ContextualRows = ({ responsive }) => {
    return (
        <div className={responsive ? 'table-responsive' : ''}>
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__header">Type</th>
                        <th className="table__header">Description</th>
                        <th className="table__header">Status</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">Default</td>
                        <td className="table__cell">Regular table row</td>
                        <td className="table__cell">Normal</td>
                    </tr>
                    <tr className="table__row table__row--success">
                        <td className="table__cell">Success</td>
                        <td className="table__cell">Indicates a successful or positive action</td>
                        <td className="table__cell">Approved</td>
                    </tr>
                    <tr className="table__row table__row--danger">
                        <td className="table__cell">Danger</td>
                        <td className="table__cell">Indicates a dangerous or potentially negative action</td>
                        <td className="table__cell">Rejected</td>
                    </tr>
                    <tr className="table__row table__row--warning">
                        <td className="table__cell">Warning</td>
                        <td className="table__cell">Indicates a warning that might need attention</td>
                        <td className="table__cell">Pending</td>
                    </tr>
                    <tr className="table__row table__row--info">
                        <td className="table__cell">Info</td>
                        <td className="table__cell">Indicates a neutral informative change or action</td>
                        <td className="table__cell">Information</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
ContextualRows.args = {
    responsive: true,
};
ContextualRows.parameters = {
    docs: {
        description: {
            story: 'Table with contextual colors for rows to indicate different statuses.',
        },
    },
};
