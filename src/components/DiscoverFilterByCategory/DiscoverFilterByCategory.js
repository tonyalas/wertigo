import { Accordion } from 'react-bootstrap';
import './DiscoverFilterByCategory.css'

function DiscoverFilterByCategory() {
    return (
        <>
            <div className='filter-category-area'>
                <div className='button-section'>
                    <h3 id='filterResults'>Filter Results by Category</h3>

                    <button class='btn btn-secondary category-button filter-button' data-filter='recentlyadded'>Recently Added</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='restaurant'>Restaurant</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='food'>Food (Other)</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='bar'>Bar</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='healthandbeauty'>Health & Beauty</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='shopping'>Shopping</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='accessories'>Accessories</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='events'>Events</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='entertainment'>Entertainment</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='automotive'>Automotive</button>
                    <button class='btn btn-secondary category-button filter-button' data-filter='contractors'>Contractors</button>
                </div>
                <hr></hr>
            </div>

            <div className='filter-subcategory-area'>
                <Accordion flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header><h4 className='subHeader'>Filter Results by Subcategory</h4></Accordion.Header>
                        <Accordion.Body>
                            <p class='filter recentlyadded'>Please select a category from above to see subcategory options.</p>

                            <p class='filter restaurant italian mexican chinese fastfood none-button'>Restaurant</p>
                            <p class='filter food sauces cafe deli grocerystore none-button'>Food (Other)</p>
                            <p class='filter bar sportsbar casual highend danceclub none-button'>Bar</p>
                            <p class='filter healthandbeauty massagetherapy barbershop hairsalon nails eyebrows eyelashes none-button'>Health & Beauty</p>
                            <p class='filter shopping art clothing shoes usedgoods none-button'>Shopping</p>
                            <p class='filter accessories gifts jewelry none-button'>Accessories</p>
                            <p class='filter events weddings none-button'>Events</p>
                            <p class='filter entertainment none-button'>Entertainment</p>
                            <p class='filter automotive carrepairs oilchanges caraccessories none-button'>Automotive</p>
                            <p class='filter contractors none-button'>Contractors</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <hr></hr>
        </>
    )
}

export default DiscoverFilterByCategory;