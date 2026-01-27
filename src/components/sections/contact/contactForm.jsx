"use client";

import React, { useState } from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar el mensaje');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Steve Milner"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="hello@websitename.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Write Your message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button
                                        type="submit"
                                        className="theme-btn"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Enviando...' : 'Send Me Message'}
                                        <i><RiMailLine size={15} /></i>
                                    </button>

                                    {status === 'success' && (
                                        <div className="mt-3" style={{ color: '#28a745' }}>
                                            ¡Mensaje enviado! Te responderé pronto.
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="mt-3" style={{ color: '#dc3545' }}>
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm
