import React from 'react'
import { Search, Checkbox, Container, Divider, Select } from 'semantic-ui-react'

const SearchFilter = ({  }) => {
    let sortOptions = [
        {value: '', text: 'Show All'},
        {value: 'LtoH', text: 'price low to high'},
        {value: 'HtoL', text: 'price high to low'},
        {value: 'AtoZ', text: 'alphabetical A to Z'},
        {value: 'ZtoA', text: 'alphabetical Z to A'},
        {value: 'age', text: 'age restriction'},
        {value: 'stat', text: 'status'},
    ]
    return(
        <Container>
            <Search />
            <Divider />
            <Select placeholder='Select Sort By' options={sortOptions}/>
        </Container>
    )
}

export default SearchFilter