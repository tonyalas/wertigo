import './FAQPage.css'

function FAQMainBody() {
    return (
        <>
            <div className='row justify-content-center'>
                <div className='col'>
                    <div className='centeredText'>
                        <h1>What exactly is Wertigo?</h1>
                        <div className='block-text'>
                            <p>Wertigo's mission is to provide new or existing, small to medium-sized, local businesses a chance
                                to be discovered. We believe the first thought on your mind when trying to find a place to eat,
                                shop, or have fun, should be to check local.
                                <br></br><br></br>
                                Nowadays, many independent and new businesses primarily use Instagram and other social media
                                sites to advertise themselves, but can often get drowned out in the sea of similar names. If
                                your name doesn't include the specific word that people are looking for, it might be impossible
                                for them to ever find you.
                                <br></br><br></br>
                                This is where Wertigo tries to bridge that gap and provide a place to aggregate all the local
                                businesses that might need an easier way of reaching new customers. You can filter by category
                                and search by name or tags to find just the right place that meets your criteria.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col'>
                    <div className='centeredText'>
                        <h1>Why the name Wertigo?</h1>
                        <div className='block-text'>
                            <p>Wertigo is a play on words of "Where to go?". How many times are you with friends and trying to
                                brainstorm ideas of where to go, but are tired of the usual chain spots? How about when you need
                                to find a local spot to find a specific service and ask yourself where to go? Wertigo!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col'>
                    <div className='centeredText'>
                        <h1>Is it free to have my business on Wertigo?</h1>
                        <div className='block-text'>
                            <p>Yes, of course! Wertigo is 100% free. Any personal data provided in the sign up form is not sold
                                anywhere and is kept confidential.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col'>
                    <div className='centeredText'>
                        <h1>Can I edit or remove my business from Wertigo?</h1>
                        <div className='block-text'>
                            <p>Also of course! If you wish to edit any details or remove your business from Wertigo, simply
                                fill out the first form on the <a href='/contactus'>Add Your Business</a> page or email us directly <a href='mailto:wertigosupport@gmail.com'>here.</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ADDS FILLER/PADDING TO PAGE BELOW --> */}
            <div className='row justify-content-center'>
                <div className='col'>
                    <div className='centeredText'>
                        <br></br><br></br>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQMainBody;