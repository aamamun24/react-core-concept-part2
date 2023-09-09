import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleReduce = () =>{
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '16px',
        margin: '16px',
        borderRadius: '8px'
    }
    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}