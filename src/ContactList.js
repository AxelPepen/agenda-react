import React from 'react';

const ContactList = ({ contacts }) => {
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.nombre}</td>
                        <td>{contact.apellido}</td>
                        <td>{contact.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactList;
