import { Card, Container, Row } from 'react-bootstrap';
import BusinessTile from '../../components/BusinessTile/BusinessTile'
import DiscoverFilterByCategory from '../../components/DiscoverFilterByCategory/DiscoverFilterByCategory';
import { useEffect, useState } from 'react';
import IsoTopeGrid from 'react-isotope';

const divsDefault = [
    {
        id: 'a',
        filter: ['Restaurant']
    },
    {
        id: 'B',
        filter: ['Shopping']
    }
];

const filtersDefault = [
    { label: 'all', isChecked: true },
    { label: 'Restaurant', isChecked: false },
    { label: 'Shopping', isChecked: false },
];

function DiscoverPageBACKUP(props) {
    const [filters, updateFilters] = useState(filtersDefault);

    const onFilter = (event) => {
        const {
            target: { value, checked }
        } = event;

        updateFilters((state) =>
            state.map((f) => {
                if (f.label === value) {
                    return {
                        ...f,
                        isChecked: checked
                    };
                }
                return {
                    ...f,
                    isChecked: false
                };
            })
        );
    };

    useEffect(() => {
        document.title = 'Wertigo - Discover'
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>Discover Local</h1>
                <h4>From existing fan-favourites to hidden gems, discover great local businesses here!</h4>
            </div>

            <Container>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                            <p><b>Want to add your own business? Register <a href='/contactus' target='_blank' rel='noopener noreferrer'>here</a> today!</b></p>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className='filter-Buttons'>
                    {filters.map((f) => (
                        <button key={`${f.label}_key`} className='btn btn-secondary category-button filter-button'>
                            <input
                                id={f.label}
                                type='checkbox'
                                value={f.label}
                                onChange={onFilter}
                                checked={f.isChecked}
                            />
                            <label htmlFor={f.label}>{f.label}</label>
                        </button>
                    ))}
                </div>

                <Container className='testDivs'>
                    <IsoTopeGrid
                        gridLayout={divsDefault}
                        noOfCols={3}
                        unitWidth={200}
                        unitHeight={100}
                        filters={filters}
                    >
                        {divsDefault.map((card) => (
                            <Card key={card.id} className={`card ${card.filter[0]}`}>
                                <div className='tags'>
                                    {card.filter.map((c) => (
                                        <span>{c}</span>
                                    ))}
                                </div>
                                {card.id}
                            </Card>
                        ))}
                    </IsoTopeGrid>
                </Container>

                {/* <Container className='testBusinessDiv'>
                    <IsoTopeGrid
                        gridLayout={divsDefault}
                        noOfCols={3}
                        unitHeight={100}
                        unitWidth={200}
                        filters={filters}
                    >
                        {divsDefault.map((business) => (
                            <BusinessTile key={business.id} name={business.id} className={`card ${business.filter[0]}`}>
                                <div className='tags'>
                                    {business.filter.map((c) => (
                                        { c }
                                    ))}
                                </div>
                                {business.id}
                            </BusinessTile>
                        ))}
                    </IsoTopeGrid>
                </Container> */}

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <DiscoverFilterByCategory />

                <div className='discoverDiv'>
                    <Row>

                        {props.businesses.map(business => {
                            return (
                                <BusinessTile name={business.name} category={business.category} key={business.id} businessID={business.id} subcategory={business.subcategory} picturePath={business.picturePath} description={business.description} phoneNumber={business.phoneNumber} websiteURL={business.websiteURL} instagramURL={business.instagramURL} instagramUsername={business.instagramUsername} address={business.address} googleMapsLink={business.googleMapsLink} facebookURL={business.facebookURL} phoneNumberDescription={business.phoneNumberDescription} phoneNumber2={business.phoneNumber2} phoneNumberDescription2={business.phoneNumberDescription2} address2={business.address2} googleMapsLink2={business.googleMapsLink2} etsyURL={business.etsyURL} instagramURL2={business.instagramURL2} instagramUsername2={business.instagramUsername2} embeddedMapsLink={business.embeddedMapsLink} embeddedMapsLink2={business.embeddedMapsLink2} hasHours={business.hasHours} />
                            )
                        })}
                    </Row>

                </div>

            </Container>


        </>
    )
}

export default DiscoverPageBACKUP;