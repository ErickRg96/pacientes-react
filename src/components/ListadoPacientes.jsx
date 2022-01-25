import Paciente from "./Paciente";

const ListadoPacientes = ({ patients, setPatient, deletePatient }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            {patients && patients.length ? (
                <>
                    <h2 className="font-black text-center text-3xl">
                        Listado Pacientes
                    </h2>
                    <p className="text-xl text-center mt-5 mb-10">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                    <div className="md:h-screen md:overflow-scroll">
                        {patients.map((patient) => (
                            <Paciente
                                key={patient.id}
                                patient={patient}
                                setPatient={setPatient}
                                deletePatient={deletePatient}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-center text-3xl">
                        No hay pacientes
                    </h2>
                    <p className="text-xl text-center mt-5 mb-10">
                        Comienza agregando pacientes {""}
                        <span className="text-indigo-600 font-bold">
                            y apareceran aqui.
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
