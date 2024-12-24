import { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        age: '',
        birthDate: '',
        gender: '',
        specialty: '',
        address: '',
        cellphone: '',
        curp: '',
        licenseNumber: '',
        sex: '',
        medicalLicense: '',
        email: '',
        hireDate: '',
        position: '',
        rfc: '',
        salary: '',
        password: ''
    });
    const [userType, setUserType] = useState("doctor");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = userType === 'doctor' ? 'http://localhost:3000/doctores/register' : 'http://localhost:3000/employee/register';

        const formDataWithUserType = { ...formData, userType };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataWithUserType),
            });

            const data = await response.json();
            if (response.ok) {
                alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} registrado con éxito`);

                setFormData({
                    name: '',
                    lastName: '',
                    age: '',
                    birthDate: '',
                    gender: '',
                    specialty: '',
                    address: '',
                    cellphone: '',
                    curp: '',
                    licenseNumber: '',
                    sex: '',
                    medicalLicense: '',
                    email: '',
                    hireDate: '',
                    password: ''
                });

            } else {
                alert('Error: ' + data.error);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            alert('Hubo un problema al registrar el usuario');
        }
    };

    return (
        <div className="register-container">
            <h1>Registro de {userType === "doctor" ? "Doctor" : "Empleado"}</h1>
            <div className="form-container-register">
                <div className="user-type-selector">
                    <label>
                        <input
                            type="radio"
                            value="doctor"
                            checked={userType === "doctor"}
                            onChange={() => setUserType("doctor")}
                        />
                        Doctor
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="employee"
                            checked={userType === "employee"}
                            onChange={() => setUserType("employee")}
                        />
                        Empleado
                    </label>
                </div>
                <form onSubmit={handleSubmit} className="horizontal-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="birthDate"
                            placeholder="Fecha de nacimiento"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                    </div>
                    {userType === "doctor" && (
                        <div className="form-group">
                            <input
                                type="number"
                                name="age"
                                placeholder="Edad"
                                value={formData.age}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="specialty"
                                placeholder="Especialidad"
                                value={formData.specialty}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Dirección"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="cellphone"
                                placeholder="Teléfono"
                                value={formData.cellphone}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="curp"
                                placeholder="CURP"
                                value={formData.curp}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="licenseNumber"
                                placeholder="Número de licencia"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="sex"
                                placeholder="Sexo"
                                value={formData.sex}
                                onChange={handleChange}
                            />
                            <label>Género</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                            <input
                                type="date"
                                name="hireDate"
                                placeholder="Fecha de contratación"
                                value={formData.hireDate}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Ingresa contraseña"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {userType === "employee" && (
                        <div className="form-group">
                            <input
                                type="text"
                                name="position"
                                placeholder="Posición"
                                value={formData.position}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="rfc"
                                placeholder="RFC"
                                value={formData.rfc}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="salary"
                                placeholder="Salario"
                                value={formData.salary}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Dirección"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="cellphone"
                                placeholder="Teléfono"
                                value={formData.cellphone}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="curp"
                                placeholder="CURP"
                                value={formData.curp}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="hireDate"
                                placeholder="Fecha de contratación"
                                value={formData.hireDate}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Ingresa contraseña"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <label>Género</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    )}
                    <button type="submit" className="register-button">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;