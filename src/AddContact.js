import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono) {
            alert("Rellene todos los campos");
            return;
        }

        const newContact = { nombre, apellido, telefono };
        addContact(newContact);
        setNombre('');
        setApellido('');
        setTelefono('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese el nombre del contacto"
                />
            </div>
            <div className="mb-3">
                <label>Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Ingrese el apellido del contacto"
                />
            </div>
            <div className="mb-3">
                <label>Teléfono</label>
                <input
                    type="text"
                    className="form-control"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ingrese el teléfono del contacto"
                />
            </div>
            <button type="submit" className="btn btn-success">Crear</button>
        </form>
    );
};

export default AddContact;
