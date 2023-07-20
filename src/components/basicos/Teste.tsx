
interface TesteProps {
    url : string,

}

export default async function Teste({url} : TesteProps) {
    const data = await fetch(url)

    if (!data.ok) {
        throw new Error('Falha ao carregar os dados')
    }
    const users : object = await data.json()
    const usersJSON = JSON.stringify(users, null, 3)
    
    return (
        <div>
           {
            
           } 
        </div>
    )
}