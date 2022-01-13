import React from 'react';
import './FilterButton.css'

function FilterButton({ filter }) {
    return (
        <>
            <div className='filter-category-area'>
                <div className='button-section'>
                    <h3>Filter Results by Category</h3>
                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Recently Added')}>Recently Added</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Restaurant')}>Restaurant</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Food')}>Food (Other)</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Bar')}>Bar</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Health & Beauty')}>Health & Beauty</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Shopping')}>Shopping</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Accessories')}>Accessories</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Events')}>Events</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Entertainment')}>Entertainment</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Automotive')}>Automotive</button>

                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Contractors')}>Contractors</button>
                </div>
                <hr></hr>
            </div>
        </>
    );
}

export default FilterButton;