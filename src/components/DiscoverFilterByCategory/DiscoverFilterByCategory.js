import { Accordion } from 'react-bootstrap';
import './DiscoverFilterByCategory.css'

function DiscoverFilterByCategory() {
    return (
        <>
            <div className='filter-category-area'>
                <div className='button-section'>
                    <h3 id='filterResults'>Filter Results by Category</h3>

                    <button className='btn btn-secondary category-button filter-button' data-filter='recentlyadded'>Recently Added</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='restaurant'>Restaurant</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='food'>Food (Other)</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='bar'>Bar</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='healthandbeauty'>Health & Beauty</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='shopping'>Shopping</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='accessories'>Accessories</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='events'>Events</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='entertainment'>Entertainment</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='automotive'>Automotive</button>
                    <button className='btn btn-secondary category-button filter-button' data-filter='contractors'>Contractors</button>
                </div>
                <hr></hr>
            </div>

            <div className='filter-subcategory-area'>
                <Accordion flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header><h4 className='subHeader'>Filter Results by Subcategory</h4></Accordion.Header>
                        <Accordion.Body>
                            <p className='filter recentlyadded'>Please select a category from above to see subcategory options.</p>
                            <p className='filter restaurant italian mexican chinese fastfood none-button'>Restaurant</p>
                            <p className='filter food sauces cafe deli grocerystore none-button'>Food (Other)</p>
                            <p className='filter bar sportsbar casual highend danceclub none-button'>Bar</p>
                            <p className='filter healthandbeauty massagetherapy barbershop hairsalon nails eyebrows eyelashes none-button'>Health & Beauty</p>
                            <p className='filter shopping art clothing shoes usedgoods none-button'>Shopping</p>
                            <p className='filter accessories gifts jewelry none-button'>Accessories</p>
                            <p className='filter events weddings none-button'>Events</p>
                            <p className='filter entertainment none-button'>Entertainment</p>
                            <p className='filter automotive carrepairs oilchanges caraccessories none-button'>Automotive</p>
                            <p className='filter contractors none-button'>Contractors</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <hr></hr>
        </>
    )
}

export default DiscoverFilterByCategory;