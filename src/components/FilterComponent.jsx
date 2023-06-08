import { StyledCard, FilterButton } from "../styles";
import { useState, useEffect } from "react";

function FilterComponent({ teamList, data, stateChanger, orignalData }) {

    const [list, setList] = useState(['All', 'Database', 'Marketing', 'Development']);
    const [isTeamList, setIsTeamList] = useState(false);



    const openTeamList = () => {
        setIsTeamList(!isTeamList);
    };

    const filterByTeam = (team) => {
        if (team !== 'All') {
            const filteredList = orignalData.filter(item => item.team == team || item.team == "");
            stateChanger(filteredList);
        } else {
            stateChanger(orignalData);
        }
        setIsTeamList(false);
    };

    return (
        <FilterButton>
            <div className="button" onClick={() => openTeamList()}>
                <img src="/assets/filter.png" alt="" />
            </div>
            {isTeamList && <div className="teamList">
                {list.map((item, index) => <div key={index} onClick={() => filterByTeam(item)}>{item}</div>)}
            </div>}
        </FilterButton >
    );
}

export default FilterComponent;