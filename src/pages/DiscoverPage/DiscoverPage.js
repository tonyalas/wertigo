import BusinessTile from '../../components/BusinessTile/BusinessTile'

function DiscoverPage(props) {
    return (
        <>
            <h1>This is the discover page.</h1>

            {props.businesses.map(business => {
                return (
                    <BusinessTile name={business.name} description={business.description} key={business.id} businessID={business.id} />
                )
            })}

        </>
    )
}

export default DiscoverPage;