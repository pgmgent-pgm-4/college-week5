import React, {memo, useMemo} from 'react'

import drug from '../../data/weed.json'

const BigList = ({ message = 'Big list yo', buzzword = 'bottom shelf' }) => {
    const filteredDrug = useMemo(() => drug.filter(drug => drug.buzzword !== buzzword), [buzzword]);

    return (
        <ul>
            {
                filteredDrug.map(d => <li key={d.id}>
                    {d.buzzword}
                </li>)
            }
        </ul>
    )
}

export default memo(BigList)
