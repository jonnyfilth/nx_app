

interface Linkprops {
    page : string,
    titulo : string,
}

export default function Link( {page, titulo} : Linkprops) {
    return (
        <div>
            <a href={page}>{titulo}</a>
        </div>
    )
}