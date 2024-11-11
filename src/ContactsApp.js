import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';

const ContactsApp = () => {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        try {
            const response = await fetch('http://www.raydelto.org/agenda.php');
            if (!response.ok) {
                throw new Error('No se pudo cargar la lista de contactos.');
            }
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    const addContact = async (newContact) => {
        try {
            const response = await fetch('http://www.raydelto.org/agenda.php', {
                method: 'POST',
                body: JSON.stringify(newContact),
            });

            if (!response.ok) {
                throw new Error('Error al agregar contacto');
            }

            showAlert('Contacto agregado', 'success');
            setContacts((prevContacts) => [...prevContacts, newContact]);
        } catch (error) {
            showAlert(`Error al agregar contacto: ${error.message}`, 'danger');
        }
    };

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 3000);
    };

    return (
        <div className="container mt-5">
            <h1 className="display-5 text-center text-white mb-5">Contactos</h1>
            {alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>}
            <AddContact addContact={addContact} />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default ContactsApp;
