import React from 'react';
import DemoContainer from '../helpers/Container';


export default {
    title: 'Styleguide/Forms/Form',
    parameters: {
        layout: 'padded',
    },
};

const Template = (args) => (
    <div className="form">
        {/* Text Input */}
        <div className="form__group">
            <label className="form__label" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                className={`form__control ${args.hasError ? 'form__control--error' : ''}`}
                id="name"
                placeholder="Enter your name"
                disabled={args.disabled}
            />
            {args.hasError && (
                <span className="form__text form__text--error">Please enter a valid name</span>
            )}
        </div>

        {/* Email Input */}
        <div className="form__group">
            <label className="form__label" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                className="form__control"
                id="email"
                placeholder="Enter your email"
                disabled={args.disabled}
            />
        </div>

        {/* Password Input */}
        <div className="form__group">
            <label className="form__label" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                className={`form__control ${args.hasError ? 'form__control--error' : ''}`}
                id="password"
                placeholder="Enter your password"
                disabled={args.disabled}
            />
            {args.hasError && (
                <span className="form__text form__text--error">
                    Password must be at least 8 characters
                </span>
            )}
        </div>

        {/* Date Picker */}
        <div className="form__group">
            <label className="form__label" htmlFor="date">
                Date
            </label>
            <input type="date" className="form__control" id="date" disabled={args.disabled} />
        </div>

        {/* Dropdown Select */}
        <div className="form__group">
            <label className="form__label" htmlFor="dropdown">
                Select Option
            </label>
            <select className="form__control" id="dropdown" disabled={args.disabled}>
                <option value="" disabled selected>
                    Choose an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>
        </div>

        {/* Number Input with Increment/Decrement */}
        <div className="form__group">
            <label className="form__label" htmlFor="quantity">
                Quantity
            </label>
            <div className="form__number-control">
                <button
                    className="form__number-button"
                    onClick={() => {}}
                    disabled={args.disabled}
                    type="button"
                >
                    -
                </button>
                <input
                    type="number"
                    className="form__control form__number-input"
                    id="quantity"
                    min="0"
                    max="100"
                    defaultValue="1"
                    disabled={args.disabled}
                />
                <button
                    className="form__number-button"
                    onClick={() => {}}
                    disabled={args.disabled}
                    type="button"
                >
                    +
                </button>
            </div>
        </div>

        {/* Textarea */}
        <div className="form__group">
            <label className="form__label" htmlFor="message">
                Message
            </label>
            <textarea
                className="form__control"
                id="message"
                rows={3}
                placeholder="Enter your message"
                disabled={args.disabled}
            ></textarea>
        </div>

        {/* Checkboxes */}
        <div className="form__group">
            <label className="form__label">Preferences</label>
            <div className="form__check">
                <input
                    type="checkbox"
                    className="form__check-input"
                    id="newsletter"
                    disabled={args.disabled}
                />
                <label className="form__check-label" htmlFor="newsletter">
                    Subscribe to newsletter
                </label>
            </div>
            <div className="form__check">
                <input
                    type="checkbox"
                    className="form__check-input"
                    id="updates"
                    defaultChecked
                    disabled={args.disabled}
                />
                <label className="form__check-label" htmlFor="updates">
                    Receive product updates
                </label>
            </div>
            <div className="form__check">
                <input
                    type="checkbox"
                    className="form__check-input"
                    id="marketing"
                    disabled={args.disabled}
                />
                <label className="form__check-label" htmlFor="marketing">
                    Accept marketing communications
                </label>
            </div>
        </div>

        {/* Radio Buttons */}
        <div className="form__group">
            <label className="form__label">Contact Preference</label>
            <div className="form__check">
                <input
                    type="radio"
                    className="form__check-input"
                    id="contact-email"
                    name="contact"
                    defaultChecked
                    disabled={args.disabled}
                />
                <label className="form__check-label" htmlFor="contact-email">
                    Email
                </label>
            </div>
            <div className="form__check">
                <input
                    type="radio"
                    className="form__check-input"
                    id="contact-phone"
                    name="contact"
                    disabled={args.disabled}
                />
                <label className="form__check-label" htmlFor="contact-phone">
                    Phone
                </label>
            </div>
            <div className="form__check">
                <input
                    type="radio"
                    className="form__check-input"
                    id="contact-sms"
                    name="contact"
                    disabled={args.disabled}
                />
                <label className="form__check-label" htmlFor="contact-sms">
                    SMS
                </label>
            </div>
        </div>

        {/* Inline Checkboxes */}
        <div className="form__group">
            <label className="form__label">Style</label>
            <div className="form__check-inline">
                <div className="form__check">
                    <input
                        type="checkbox"
                        className="form__check-input"
                        id="category-1"
                        disabled={args.disabled}
                    />
                    <label className="form__check-label" htmlFor="category-1">
                        Modern
                    </label>
                </div>
                <div className="form__check">
                    <input
                        type="checkbox"
                        className="form__check-input"
                        id="category-2"
                        disabled={args.disabled}
                    />
                    <label className="form__check-label" htmlFor="category-2">
                        Classic
                    </label>
                </div>
                <div className="form__check">
                    <input
                        type="checkbox"
                        className="form__check-input"
                        id="category-3"
                        disabled={args.disabled}
                    />
                    <label className="form__check-label" htmlFor="category-3">
                        Industrial
                    </label>
                </div>
            </div>
        </div>

        {/* Inline Radio Buttons */}
        <div className="form__group">
            <label className="form__label">Product Type</label>
            <div className="form__check-inline">
                <div className="form__check">
                    <input
                        type="radio"
                        className="form__check-input"
                        id="level-beginner"
                        name="level"
                        defaultChecked
                        disabled={args.disabled}
                    />
                    <label className="form__check-label" htmlFor="level-beginner">
                        Lighting
                    </label>
                </div>
                <div className="form__check">
                    <input
                        type="radio"
                        className="form__check-input"
                        id="level-intermediate"
                        name="level"
                        disabled={args.disabled}
                    />
                    <label className="form__check-label" htmlFor="level-intermediate">
                        Furniture
                    </label>
                </div>
                <div className="form__check">
                    <input
                        type="radio"
                        className="form__check-input"
                        id="level-advanced"
                        name="level"
                        disabled={args.disabled}
                    />
                    <label className="form__check-label" htmlFor="level-advanced">
                        Accessories
                    </label>
                </div>
            </div>
        </div>

        {/* Switch-style Checkbox */}
        <div className="form__group">
            <label className="form__label">Settings</label>
            <div className="form__check form__switch">
                <input
                    type="checkbox"
                    className="form__switch-input"
                    id="notifications"
                    defaultChecked
                    disabled={args.disabled}
                />
                <label className="form__switch-label" htmlFor="notifications">
                    Enable notifications
                </label>
            </div>
            <div className="form__check form__switch">
                <input
                    type="checkbox"
                    className="form__switch-input"
                    id="dark-mode"
                    disabled={args.disabled}
                />
                <label className="form__switch-label" htmlFor="dark-mode">
                    Dark mode
                </label>
            </div>
        </div>

        {/* Buttons */}
        <div className="form__group">
            <button className="button button--primary" disabled={args.disabled}>
                Submit
            </button>
            <button
                className="button button--outline"
                style={{marginLeft: '1rem'}}
                disabled={args.disabled}
            >
                Cancel
            </button>
        </div>
    </div>
)

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    hasError: false,
};

export const WithError = Template.bind({});
WithError.args = {
    disabled: false,
    hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    hasError: false,
}; 