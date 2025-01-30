export default function Sidebar({ onApplyFilters }) {
    return (
        <div className="w-64 p-4 bg-white shadow-lg">
            <h2 className="font-semibold text-xl mb-4">Filtros</h2>
            <div className="mb-4">
                <h3 className="text-lg">Modalidades</h3>
                <input type="checkbox" id="artistic" className="mr-2" />
                <label htmlFor="artistic">Artística</label>
                <br />
                <input type="checkbox" id="design" className="mr-2" />
                <label htmlFor="design">Diseño</label>
            </div>
            <div className="mb-4">
                <h3 className="text-lg">Municipios</h3>
                <input type="checkbox" id="barcelona" className="mr-2" />
                <label htmlFor="barcelona">Barcelona</label>
                <br />
                <input type="checkbox" id="madrid" className="mr-2" />
                <label htmlFor="madrid">Madrid</label>
            </div>
            <button onClick={onApplyFilters} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full">Aplicar filtros</button>
        </div>
    );
}
