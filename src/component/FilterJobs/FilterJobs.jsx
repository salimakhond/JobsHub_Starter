import React from 'react';

let FilterJobs = (props) => {
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value);
    }

    return (
        <div>
            <select className='bg-[#F4F4F4] text-[#474747] p-5 rounded-lg font-medium text-xl' onChange={onFilterValueChanged}>
                <option value="All">Filter By</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
            </select>
        </div>
    );
};

export default FilterJobs;