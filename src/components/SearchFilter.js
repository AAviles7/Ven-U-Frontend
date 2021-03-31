import React from 'react'
import { Search, Container, Divider, Dropdown } from 'semantic-ui-react'

const SearchFilter = ({ sortBy }) => {
    let sortOptions = [
        {key: '',value: '', text: 'Show All'},
        {key: 'LtoH',value: 'LtoH', text: 'price low to high'},
        {key: 'HtoL',value: 'HtoL', text: 'price high to low'},
        {key: 'AtoZ',value: 'AtoZ', text: 'alphabetical A to Z'},
        {key: 'ZtoA',value: 'ZtoA', text: 'alphabetical Z to A'},
        {key: 'age',value: 'age', text: 'age restriction'}
    ]
    return(
        <Container>
            <Search />
            <Divider />
            <Dropdown placeholder='Select Sort By' fluid button className='icon' floating labeled icon='filter'>
                <Dropdown.Menu>
                    <Dropdown.Header icon='icon' content='Sort By' />
                    <Dropdown.Menu scrolling>
                        {sortOptions.map((option) => (
                        <Dropdown.Item key={option.value} {...option} onClick={() => sortBy(option.value)}/>
                        ))}
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}

export default SearchFilter