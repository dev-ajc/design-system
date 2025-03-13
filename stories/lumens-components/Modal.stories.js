import React, { useState } from 'react';
import Modal from '@/components/Modal';

export default {
    title: 'ReactJS Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large', 'fullscreen'],
            description: 'Size of the modal',
        },
        closeOnBackdropClick: {
            control: 'boolean',
            description: 'Whether clicking the backdrop should close the modal',
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Whether to show the close button in the header',
        },
    },
};

// Template that handles modal state
const Template = ({ size, closeOnBackdropClick, showCloseButton, title, content, hasFooter }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // Generate footer if needed
    const footer = hasFooter ? (
        <>
            <button className="button button--outline" onClick={closeModal}>Cancel</button>
            <button className="button button--primary" onClick={closeModal}>Confirm</button>
        </>
    ) : null;

    return (
        <div>
            <button className="button button--primary" onClick={openModal}>
                Open Modal
            </button>

            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                title={title}
                size={size}
                closeOnBackdropClick={closeOnBackdropClick}
                showCloseButton={showCloseButton}
                footer={footer}
            >
                <div>
                    {content}
                </div>
            </Modal>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'Default Modal',
    content: 'This is the default modal with standard configuration.',
    size: 'medium',
    closeOnBackdropClick: true,
    showCloseButton: true,
    hasFooter: true,
};

export const SmallModal = Template.bind({});
SmallModal.args = {
    title: 'Small Modal',
    content: 'This is a small modal, useful for simple confirmations or short forms.',
    size: 'small',
    closeOnBackdropClick: true,
    showCloseButton: true,
    hasFooter: true,
};

export const LargeModal = Template.bind({});
LargeModal.args = {
    title: 'Large Modal',
    content: 'This is a large modal, suitable for complex forms or displaying more content.',
    size: 'large',
    closeOnBackdropClick: true,
    showCloseButton: true,
    hasFooter: true,
};

export const FullscreenModal = Template.bind({});
FullscreenModal.args = {
    title: 'Fullscreen Modal',
    content: 'This modal takes up the entire screen, perfect for immersive experiences or complex workflows.',
    size: 'fullscreen',
    closeOnBackdropClick: true,
    showCloseButton: true,
    hasFooter: true,
};

export const NoFooter = Template.bind({});
NoFooter.args = {
    title: 'Modal Without Footer',
    content: 'This modal does not have a footer section. It\'s useful for simple information displays.',
    size: 'medium',
    closeOnBackdropClick: true,
    showCloseButton: true,
    hasFooter: false,
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
    title: 'Modal Without Close Button',
    content: 'This modal does not have a close button in the header. Users must use the footer buttons to close it.',
    size: 'medium',
    closeOnBackdropClick: false,
    showCloseButton: false,
    hasFooter: true,
};

export const FormModal = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        alert(`Form submitted with: ${JSON.stringify(formData)}`);
        closeModal();
    };

    const footer = (
        <>
            <button className="button button--outline" onClick={closeModal}>Cancel</button>
            <button className="button button--primary" onClick={handleSubmit}>Submit</button>
        </>
    );

    return (
        <div>
            <button className="button button--primary" onClick={openModal}>
                Open Contact Form
            </button>

            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                title="Contact Form"
                size="medium"
                closeOnBackdropClick={true}
                showCloseButton={true}
                footer={footer}
            >
                <div className="form">
                    <div className="form__group">
                        <label className="form__label" htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form__control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form__control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="message">Message</label>
                        <textarea
                            className="form__control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
