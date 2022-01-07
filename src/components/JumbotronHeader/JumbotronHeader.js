import './JumbotronHeader.css'

function JumbotronHeader() {
    return (
        <div className='Jumbotron'>
            <h1>Wertigo</h1>
            <h4>The local-friendly website for when you ask yourself where to go.</h4>
            <h5>Coming soon in 2022!</h5>
            <h5>Follow us on Instagram <a href='https://www.instagram.com/wertigocanada/' id='wertigo-link' target='_blank' rel='noopener noreferrer'>@wertigocanada</a> for updates!</h5>
        </div>
    )
}

export default JumbotronHeader;