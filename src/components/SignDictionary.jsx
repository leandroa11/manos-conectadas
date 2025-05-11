import { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

const SignDictionary = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null); // Estado para la letra seleccionada

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const signImages = {
        A: '/assets/letters/A/A1.jpg',
        B: '/assets/letters/B/B1.jpg',
        C: '/assets/letters/C/C1.jpg',
        D: '/assets/letters/D/D1.jpg',
        E: '/assets/letters/E/E1.jpg',
        F: '/assets/letters/F/F1.jpg',
        G: '/assets/letters/G/G1.jpg',
        H: '/assets/letters/H/H1.jpg',
        I: '/assets/letters/I/I1.jpg',
        J: '/assets/letters/J/J1.jpg',
        K: '/assets/letters/K/K1.jpg',
        L: '/assets/letters/L/L1.jpg',
        M: '/assets/letters/M/M1.jpg',
        N: '/assets/letters/N/N1.jpg',
        O: '/assets/letters/O/O1.jpg',
        P: '/assets/letters/P/P1.jpg',
        Q: '/assets/letters/Q/Q1.jpg',
        R: '/assets/letters/R/R1.jpg',
        S: '/assets/letters/S/S1.jpg',
        T: '/assets/letters/T/T1.jpg',
        U: '/assets/letters/U/U1.jpg',
        V: '/assets/letters/V/V1.jpg',
        W: '/assets/letters/W/W1.jpg',
        X: '/assets/letters/X/X1.jpg',
        Y: '/assets/letters/Y/Y1.jpg',
        Z: '/assets/letters/Z/Z1.jpg',
    };

    const search = (event) => {
        const query = event.query.toLowerCase();
        const filteredItems = alphabet.filter((letter) =>
            letter.toLowerCase().startsWith(query)
        );
        setItems(filteredItems);
    };

    const handleSelection = (e) => {
        setValue(e.value); // Actualiza el valor del AutoComplete
        setSelectedLetter(e.value); // Actualiza la letra seleccionada
    };
    console.log(signImages[selectedLetter]);
    
    return (
        <div className="p-4 h-full flex flex-column">
            <div className="mb-4">
                <span className="p-input-icon-left w-full">
                    <AutoComplete
                        value={value}
                        suggestions={items}
                        completeMethod={search}
                        onChange={(e) => setValue(e.value)}
                        onSelect={handleSelection} // Maneja la selección de una letra
                        dropdown
                        placeholder='Buscar letra...'
                    />
                </span>
            </div>
            <div className="mt-4 border-top-1 surface-border pt-4">
                {selectedLetter ? (
                    <div className="text-center">
                        <h3 className="mb-3">Seña de la letra {selectedLetter}</h3>
                        <div className="border-2 surface-border border-round overflow-hidden">
                            <img
                                src={signImages[selectedLetter]}
                                alt={`Seña de la letra ${selectedLetter}`}
                                className="w-full"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-600 p-4">
                        Selecciona una letra para ver su seña
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignDictionary;