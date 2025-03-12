import React from 'react';

export default {
    title: 'Design System/Components',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Overview of the core components in our design system.',
            },
        },
    },
};

const Template = () => {
    return (<>i
    </>);
}

// Alert Component Stories
export const Alert = () => (
    <div className="sb-example-group">
        <div className="sb-example">
            <div className="alert alert--info">
                <strong>Info!</strong> This is an informational message.
            </div>
        </div>

        <div className="sb-example">
            <div className="alert alert--success">
                <strong>Success!</strong> Your action has been completed successfully.
            </div>
        </div>

        <div className="sb-example">
            <div className="alert alert--warning">
                <strong>Warning!</strong> This action might have consequences.
            </div>
        </div>

        <div className="sb-example">
            <div className="alert alert--danger">
                <strong>Danger!</strong> This action cannot be undone.
            </div>
        </div>

        <div className="sb-example">
            <div className="alert alert--info">
                <h4 className="alert__heading">Info with Heading</h4>
                <p>This alert has a heading to emphasize important information.</p>
            </div>
        </div>

        <div className="sb-example">
            <div className="alert alert--success">
                <div>
                    <strong>Success!</strong> Your action has been completed successfully.
                </div>
                <button className="alert__close" aria-label="Close">
                    &times;
                </button>
            </div>
        </div>
    </div>
);

Alert.parameters = {
    docs: {
        description: {
            story: 'Alerts communicate status, provide feedback, or encourage action.',
        },
    },
};

// Button Component Stories
export const Button = () => (
    <div className="sb-example-group">
        <h4>Button Variants</h4>
        <div className="sb-example d-flex gap-md">
            <button className="button button--primary">Primary</button>
            <button className="button button--secondary">Secondary</button>
            <button className="button button--outline">Outline</button>
        </div>

        <h4>Button Sizes</h4>
        <div className="sb-example d-flex gap-md align-items-center">
            <button className="button button--primary button--sm">Small</button>
            <button className="button button--primary">Default</button>
            <button className="button button--primary button--lg">Large</button>
        </div>

        <h4>Full Width Button</h4>
        <div className="sb-example">
            <button className="button button--primary button--block">Full Width</button>
        </div>

        <h4>Disabled Button</h4>
        <div className="sb-example d-flex gap-md">
            <button className="button button--primary" disabled>Disabled (attribute)</button>
            <button className="button button--primary button--disabled">Disabled (class)</button>
        </div>
    </div>
);

Button.parameters = {
    docs: {
        description: {
            story: 'Buttons communicate actions that users can take.',
        },
    },
};

// Card Component Stories
export const Card = () => (
    <div className="sb-example-group">
        <h4>Basic Card</h4>
        <div className="sb-example">
            <div className="card" style={{ maxWidth: '300px' }}>
                <div className="card__body">
                    <h5 className="card__title">Card Title</h5>
                    <p className="card__text">This is some card content. Cards are used to group related information.</p>
                    <button className="button button--primary">Action</button>
                </div>
            </div>
        </div>

        <h4>Card with Header and Footer</h4>
        <div className="sb-example">
            <div className="card" style={{ maxWidth: '300px' }}>
                <div className="card__header">
                    Featured
                </div>
                <div className="card__body">
                    <h5 className="card__title">Card Title</h5>
                    <p className="card__text">This is some card content with supporting text below.</p>
                    <button className="button button--primary">Go somewhere</button>
                </div>
                <div className="card__footer">
                    Last updated 3 mins ago
                </div>
            </div>
        </div>

        <h4>Card Variants</h4>
        <div className="sb-example d-flex gap-lg">
            <div className="card card--primary" style={{ maxWidth: '250px' }}>
                <div className="card__header">
                    Primary Card
                </div>
                <div className="card__body">
                    <p className="card__text">This card has primary styling.</p>
                </div>
            </div>

            <div className="card card--secondary" style={{ maxWidth: '250px' }}>
                <div className="card__header">
                    Secondary Card
                </div>
                <div className="card__body">
                    <p className="card__text">This card has secondary styling.</p>
                </div>
            </div>
        </div>
    </div>
);

Card.parameters = {
    docs: {
        description: {
            story: 'Cards are used to group related content and actions.',
        },
    },
};

// Form Component Stories
export const FormElements = () => (
    <div className="sb-example-group">
        <h4>Text Input</h4>
        <div className="sb-example">
            <div className="form__group">
                <label className="form__label" htmlFor="name-example">Name</label>
                <input type="text" className="form__control" id="name-example" placeholder="Enter your name" />
            </div>
        </div>

        <h4>Input with Error</h4>
        <div className="sb-example">
            <div className="form__group">
                <label className="form__label" htmlFor="email-example">Email</label>
                <input type="email" className="form__control form__control--error" id="email-example" placeholder="Enter your email" />
                <small className="form__text form__text--error">Please enter a valid email address.</small>
            </div>
        </div>

        <h4>Disabled Input</h4>
        <div className="sb-example">
            <div className="form__group">
                <label className="form__label" htmlFor="disabled-example">Disabled Input</label>
                <input type="text" className="form__control" id="disabled-example" placeholder="Disabled input" disabled />
            </div>
        </div>

        <h4>Textarea</h4>
        <div className="sb-example">
            <div className="form__group">
                <label className="form__label" htmlFor="message-example">Message</label>
                <textarea className="form__control" id="message-example" rows="3" placeholder="Enter your message"></textarea>
            </div>
        </div>

        <h4>Checkbox</h4>
        <div className="sb-example">
            <div className="form__check">
                <input className="form__check-input" type="checkbox" id="check-example" />
                <label className="form__check-label" htmlFor="check-example">
                    Check this checkbox
                </label>
            </div>
        </div>

        <h4>Radio Buttons</h4>
        <div className="sb-example">
            <div className="form__check">
                <input className="form__check-input" type="radio" name="radio-example" id="radio1-example" defaultChecked />
                <label className="form__check-label" htmlFor="radio1-example">
                    Option one
                </label>
            </div>

            <div className="form__check">
                <input className="form__check-input" type="radio" name="radio-example" id="radio2-example" />
                <label className="form__check-label" htmlFor="radio2-example">
                    Option two
                </label>
            </div>
        </div>

        <h4>Inline Checkboxes</h4>
        <div className="sb-example">
            <div className="form__check-inline">
                <div className="form__check">
                    <input className="form__check-input" type="checkbox" id="inline1-example" />
                    <label className="form__check-label" htmlFor="inline1-example">Option 1</label>
                </div>

                <div className="form__check">
                    <input className="form__check-input" type="checkbox" id="inline2-example" />
                    <label className="form__check-label" htmlFor="inline2-example">Option 2</label>
                </div>

                <div className="form__check">
                    <input className="form__check-input" type="checkbox" id="inline3-example" />
                    <label className="form__check-label" htmlFor="inline3-example">Option 3</label>
                </div>
            </div>
        </div>

        <h4>Switch</h4>
        <div className="sb-example">
            <div className="form__switch">
                <input className="form__switch-input" type="checkbox" id="switch-example" />
                <label className="form__switch-label" htmlFor="switch-example">
                    Toggle switch
                </label>
            </div>
        </div>

        <h4>Number Input with Buttons</h4>
        <div className="sb-example">
            <div className="form__number-control">
                <button className="form__number-button" type="button">-</button>
                <input type="number" className="form__control" defaultValue="1" min="0" max="10" />
                <button className="form__number-button" type="button">+</button>
            </div>
        </div>
    </div>
);

FormElements.parameters = {
    docs: {
        description: {
            story: 'Form elements for user input and interaction.',
        },
    },
};

// Navigation Component Stories
export const Navigation = () => (
    <div className="sb-example-group">
        <h4>Basic Navigation</h4>
        <div className="sb-example">
            <ul className="nav">
                <li className="nav__item">
                    <a className="nav__link nav__link--active" href="#">Home</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Features</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Pricing</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link nav__link--disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>

        <h4>Horizontal Navigation</h4>
        <div className="sb-example">
            <ul className="nav nav--horizontal">
                <li className="nav__item">
                    <a className="nav__link nav__link--active" href="#">Home</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Features</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Pricing</a>
                </li>
            </ul>
        </div>

        <h4>Vertical Navigation</h4>
        <div className="sb-example">
            <ul className="nav nav--vertical">
                <li className="nav__item">
                    <a className="nav__link nav__link--active" href="#">Home</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Features</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Pricing</a>
                </li>
            </ul>
        </div>

        <h4>Tabs Navigation</h4>
        <div className="sb-example">
            <ul className="nav nav--tabs">
                <li className="nav__item">
                    <a className="nav__link nav__link--active" href="#">Active</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Link</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Link</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link nav__link--disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
);

Navigation.parameters = {
    docs: {
        description: {
            story: 'Navigation components help users move through the application.',
        },
    },
};

// Table Component Stories
export const Table = () => (
    <div className="sb-example-group">
        <h4>Basic Table</h4>
        <div className="sb-example">
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__header">Name</th>
                        <th className="table__header">Email</th>
                        <th className="table__header">Role</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">John Doe</td>
                        <td className="table__cell">john@example.com</td>
                        <td className="table__cell">Developer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Jane Smith</td>
                        <td className="table__cell">jane@example.com</td>
                        <td className="table__cell">Designer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Bob Johnson</td>
                        <td className="table__cell">bob@example.com</td>
                        <td className="table__cell">Manager</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>Striped Table</h4>
        <div className="sb-example">
            <table className="table table--striped">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__header">Name</th>
                        <th className="table__header">Email</th>
                        <th className="table__header">Role</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">John Doe</td>
                        <td className="table__cell">john@example.com</td>
                        <td className="table__cell">Developer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Jane Smith</td>
                        <td className="table__cell">jane@example.com</td>
                        <td className="table__cell">Designer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Bob Johnson</td>
                        <td className="table__cell">bob@example.com</td>
                        <td className="table__cell">Manager</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>Bordered Table</h4>
        <div className="sb-example">
            <table className="table table--bordered">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__header">Name</th>
                        <th className="table__header">Email</th>
                        <th className="table__header">Role</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">John Doe</td>
                        <td className="table__cell">john@example.com</td>
                        <td className="table__cell">Developer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Jane Smith</td>
                        <td className="table__cell">jane@example.com</td>
                        <td className="table__cell">Designer</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>Hover Effect Table</h4>
        <div className="sb-example">
            <table className="table table--hover">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__header">Name</th>
                        <th className="table__header">Email</th>
                        <th className="table__header">Role</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">John Doe</td>
                        <td className="table__cell">john@example.com</td>
                        <td className="table__cell">Developer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Jane Smith</td>
                        <td className="table__cell">jane@example.com</td>
                        <td className="table__cell">Designer</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Bob Johnson</td>
                        <td className="table__cell">bob@example.com</td>
                        <td className="table__cell">Manager</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

Table.parameters = {
    docs: {
        description: {
            story: 'Tables are used to organize and display tabular data.',
        },
    },
};

// Layout Component Stories
export const Layout = () => (
    <div className="sb-example-group">
        <h4>Container</h4>
        <div className="sb-example">
            <div className="container" style={{ border: '1px dashed #ccc', padding: '1rem' }}>
                Standard container with responsive width
            </div>
        </div>

        <h4>Fluid Container</h4>
        <div className="sb-example">
            <div className="container container--fluid" style={{ border: '1px dashed #ccc', padding: '1rem' }}>
                Fluid container (full width)
            </div>
        </div>

        <h4>Grid Layout</h4>
        <div className="sb-example">
            <div className="grid">
                <div className="grid__item grid__item--md-6" style={{ background: '#e0e0ff', padding: '1rem' }}>
                    Half width on medium screens and up
                </div>
                <div className="grid__item grid__item--md-6" style={{ background: '#ffe0e0', padding: '1rem' }}>
                    Half width on medium screens and up
                </div>
            </div>
        </div>

        <h4>Responsive Grid</h4>
        <div className="sb-example">
            <div className="grid">
                <div
                    className="grid__item grid__item--sm-12 grid__item--md-6 grid__item--lg-4"
                    style={{ background: '#e0e0ff', padding: '1rem' }}
                >
                    Full → Half → Third
                </div>
                <div
                    className="grid__item grid__item--sm-12 grid__item--md-6 grid__item--lg-4"
                    style={{ background: '#ffe0e0', padding: '1rem' }}
                >
                    Full → Half → Third
                </div>
                <div
                    className="grid__item grid__item--sm-12 grid__item--md-12 grid__item--lg-4"
                    style={{ background: '#e0ffe0', padding: '1rem' }}
                >
                    Full → Full → Third
                </div>
            </div>
        </div>
    </div>
);

Layout.parameters = {
    docs: {
        description: {
            story: 'Layout components provide structure for page content.',
        },
    },
};

// Combined Examples
export const CombinedExamples = () => (
    <div className="sb-example-group">
        <h4>Card with Form</h4>
        <div className="sb-example">
            <div className="card" style={{ maxWidth: '400px' }}>
                <div className="card__header">
                    <h3>Contact Form</h3>
                </div>
                <div className="card__body">
                    <div className="form__group">
                        <label className="form__label" htmlFor="combined-name">Name</label>
                        <input type="text" className="form__control" id="combined-name" placeholder="Enter your name" />
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="combined-email">Email</label>
                        <input type="email" className="form__control" id="combined-email" placeholder="Enter your email" />
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="combined-message">Message</label>
                        <textarea className="form__control" id="combined-message" rows="3" placeholder="Enter your message"></textarea>
                    </div>
                </div>
                <div className="card__footer d-flex gap-md">
                    <button className="button button--primary">Submit</button>
                    <button className="button button--outline">Cancel</button>
                </div>
            </div>
        </div>

        <h4>Navigation with Buttons</h4>
        <div className="sb-example">
            <div className="d-flex justify-content-between align-items-center p-md" style={{ background: '#f5f5f5' }}>
                <ul className="nav">
                    <li className="nav__item">
                        <a className="nav__link nav__link--active" href="#">Home</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">Features</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">Pricing</a>
                    </li>
                </ul>
                <div className="d-flex gap-sm">
                    <button className="button button--outline">Login</button>
                    <button className="button button--primary">Sign Up</button>
                </div>
            </div>
        </div>

        <h4>Grid of Cards</h4>
        <div className="sb-example">
            <div className="grid">
                <div className="grid__item grid__item--md-4">
                    <div className="card">
                        <div className="card__body">
                            <h5 className="card__title">Card 1</h5>
                            <p className="card__text">This is the first card.</p>
                            <button className="button button--primary">View</button>
                        </div>
                    </div>
                </div>
                <div className="grid__item grid__item--md-4">
                    <div className="card">
                        <div className="card__body">
                            <h5 className="card__title">Card 2</h5>
                            <p className="card__text">This is the second card.</p>
                            <button className="button button--primary">View</button>
                        </div>
                    </div>
                </div>
                <div className="grid__item grid__item--md-4">
                    <div className="card">
                        <div className="card__body">
                            <h5 className="card__title">Card 3</h5>
                            <p className="card__text">This is the third card.</p>
                            <button className="button button--primary">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

CombinedExamples.parameters = {
    docs: {
        description: {
            story: 'Examples of combining multiple components to create more complex UI elements.',
        },
    },
};

// Add some basic styles for the Storybook examples
const style = document.createElement('style');
style.innerHTML = `
  .sb-example-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .sb-example {
    margin-top: 0.5rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #fff;
  }
  
  h4 {
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;
document.head.appendChild(style);