export default function SpaceList({ spaces }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space) => (
                <div key={space.id} className="border rounded-md p-4 bg-white shadow-sm">
                    <h3 className="text-xl font-semibold">{space.name}</h3>
                    <p>{space.type}</p>
                    <p>Valoración: {space.rating}</p>
                    <p>Comentarios: {space.commentsCount}</p>
                </div>
            ))}
        </div>
    );
}