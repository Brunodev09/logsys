import React, {useState, useEffect} from 'react';
import TechItem from './TechItem';

const TechListModal = () => {

    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    if (loading) {
        return <div><p>Loading...</p></div>
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Tech list</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                       <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechListModal
