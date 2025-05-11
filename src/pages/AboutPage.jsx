import { Accordion, AccordionTab } from 'primereact/accordion';

const AboutPage = () => {
    const technologies = [
        { icon: 'pi pi-shield', name: 'TensorFlow.js', description: 'Para ejecución de modelos de IA en el navegador' },
        { icon: 'pi pi-cloud', name: 'Redes Neuronales Convolucionales', description: 'Arquitectura CNN para reconocimiento de señas' },
        { icon: 'pi pi-mobile', name: 'React & PrimeReact', description: 'Desarrollo de interfaz web responsiva' },
        { icon: 'pi pi-camera', name: 'MediaDevices API', description: 'Acceso a la cámara en tiempo real' }
    ];

    const teamMembers = [
        { name: 'Leandro Angulo Florez', role: 'Backend & IA', avatar: 'pi pi-server' },
        { name: 'Juan Pablo Ordóñez', role: 'Frontend & UI', avatar: 'pi pi-desktop' },
        { name: 'Daniel Felipe Lizarazo', role: 'Testing & Documentación', avatar: 'pi pi-file' }
    ];

    return (
        <div className="grid p-4">
            <div className="col-12">
                <div className="card p-4">
                    <h1 className="text-4xl font-bold text-center main-color">Acerca de Manos Conectadas</h1>

                    <div className="grid">
                        <div className="col-12 md:col-6 p-4">
                            <div className="text-2xl line-height-3 mb-5">
                                <i className="pi pi-info-circle mr-3 text-primary"></i>
                                Nuestra misión es romper barreras comunicativas mediante tecnología innovadora que
                                interpreta la lengua de señas colombiana en tiempo real.
                            </div>

                            <Accordion className="mb-5" activeIndex={0}>
                                <AccordionTab header="Tecnologías Clave">
                                    <div className="grid">
                                        {technologies.map((tech, index) => (
                                            <div key={index} className="col-12 md:col-6 p-3">
                                                <div className="flex align-items-center p-3 border-round surface-50">
                                                    <i className={`${tech.icon} text-2xl mr-3 text-primary`}></i>
                                                    <div>
                                                        <h3 className="mb-1">{tech.name}</h3>
                                                        <p className="mt-0 text-600">{tech.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionTab>
                            </Accordion>
                        </div>

                        <div className="col-12 md:col-6 p-4">
                            <div className="card p-4">
                                <h2 className="text-3xl text-center mb-5 main-color">Equipo de Desarrollo</h2>
                                <div className="grid">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="col-12 p-3">
                                            <div className="flex align-items-center p-3 border-round surface-50">
                                                <i className={`${member.avatar} text-2xl mr-3 text-primary`}></i>
                                                <div>
                                                    <h3 className="mb-1">{member.name}</h3>
                                                    <p className="mt-0 text-600">{member.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 surface-50 border-round">
                        <h2 className="text-3xl text-center mb-4 main-color">Impacto Social</h2>
                        <div className="grid">
                            <div className="col-12 md:col-6 p-3">
                                <div className="text-center">
                                    <i className="pi pi-users text-4xl text-primary mb-3"></i>
                                    <h3>+85% Precisión</h3>
                                    <p className="mt-0 text-600">En reconocimiento de señas básicas</p>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 p-3">
                                <div className="text-center">
                                    <i className="pi pi-clock text-4xl text-primary mb-3"></i>
                                    <h3>&lt;1s Respuesta</h3>
                                    <p className="mt-0 text-600">Tiempo real de procesamiento</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-4 surface-50 border-round">
                        <h2 className="text-3xl text-center mb-4 main-color">Próximos Objetivos</h2>
                        <div className="grid">
                            <div className="col-12 md:col-4 text-center p-3">
                                <i className="pi pi-book text-4xl text-primary"></i>
                                <h4>Ampliar Vocabulario</h4>
                                <p>Incluir 100+ nuevas señas</p>
                            </div>
                            <div className="col-12 md:col-4 text-center p-3">
                                <i className="pi pi-mobile text-4xl text-primary"></i>
                                <h4>App Móvil</h4>
                                <p>Versión Android/iOS</p>
                            </div>
                            <div className="col-12 md:col-4 text-center p-3">
                                <i className="pi pi-globe text-4xl text-primary"></i>
                                <h4>Multilenguaje</h4>
                                <p>Soporte para LSE y ASL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;