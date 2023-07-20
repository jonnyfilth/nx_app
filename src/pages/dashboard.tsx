import Card from "@/components/basicos/Card"
import Link from "@/components/basicos/Link"

interface Dashboardprops {
    titulo? : string,
    subtitulo? : string,
}

export default function Dashboard( {titulo, subtitulo} : Dashboardprops) {
    return (
        <div className="flex gap-5">
            <h1>Dashboard</h1>
            <Card name="Teste"/>
            <Link page="/" titulo="Pagina Inicial"/>
            <Link page="/dashboard" titulo="Dashboard"/>
            <Link page="/contato" titulo="Contato"/>
            <h1>{titulo ?? 'Olá'}</h1>
            <h2>{subtitulo ?? 'Quem é você?'}</h2>
        </div>
    )
}