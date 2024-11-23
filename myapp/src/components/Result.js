export default function({result}){
    return(
        <div>
            {result === 'win' && <h2> Win </h2>}
            {result === 'lose' && <h2> Loose </h2>}
        </div>
    )
}