import Image from "next/image"

export default function Photos({ photos, loading }) {
    if (loading) {
        return <h3>Loading...</h3>
    }
    return <ul className="list-group p-5">
        { photos.map(photo => {
            return (
                <li key={photo.id}>
                    <Image
                        className="pb-4"
                        src={photo.urls.thumb}
                        width={200}
                        height={70}
                        alt={photo.alt_description}
                    />
                </li>
            )
        })}
    </ul>
}