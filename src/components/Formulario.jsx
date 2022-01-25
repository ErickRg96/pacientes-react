import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ patients, setPatients, patient, setPatient }) => {
    const [name, setName] = useState("");
    const [own, setOwn] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptom, setSymptom] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setName(patient.name);
            setOwn(patient.own);
            setEmail(patient.email);
            setDate(patient.date);
            setSymptom(patient.symptom);
        }
    }, [patient]);

    const idGenerator = () => {
        return crypto.randomUUID();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del formulario
        if ([name, own, email, date, symptom].includes("")) {
            setError(true);
            return;
        }

        setError(false);

        const objectPatient = {
            name,
            own,
            email,
            date,
            symptom,
        };

        if (patient.id) {
            // Editando
            objectPatient.id = patient.id;

            const patientsUpdated = patients.map((patientState) =>
                patientState.id === patient.id ? objectPatient : patientState
            );

            setPatients(patientsUpdated);
            setPatient({});
        } else {
            // Nuevo
            objectPatient.id = idGenerator();
            setPatients([...patients, objectPatient]);
        }

        setName("");
        setOwn("");
        setEmail("");
        setDate("");
        setSymptom("");
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error>Todos los campos son obligatorios</Error>}

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="mascota"
                    >
                        Nombre Mascota
                    </label>

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="propietario"
                    >
                        Nombre Propietario
                    </label>

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={own}
                        onChange={(e) => setOwn(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="alta"
                    >
                        Alta
                    </label>

                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="sintomas"
                    >
                        Sintomas
                    </label>

                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={patient.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
