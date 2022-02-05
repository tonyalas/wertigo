import './IndexMainBody.css'
import { Link } from 'react-router-dom';

function IndexMainBody() {
    return (
        <div>
            <div className='indexDiv3and4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src='/images/community-pic.jpg' className='vector_image' alt=''></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>Think Local, Live Local</h3>
                        <p className='info_text'>Support your community by shopping local. Created locally with the community in mind. Follow us on Instagram <a href='https://www.instagram.com/wertigocanada/' target='_blank' rel='noopener noreferrer'>@wertigocanada</a>!</p>
                    </div>
                </div>
            </div>
            <div className='indexDiv3and4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src='/images//search.jpg' className='vector_image' alt=''></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>What are you looking for today?</h3>
                        <p className='info_text'>Simplify the way you search for nearby businesses. Restaurant? Beauty Services? Something fun to do? Find them here!</p>
                    </div>
                </div>
            </div>
            <div className='indexDiv5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src='/images/shopping-center.jpg' className='vector_image' alt=''></img>
                    </div>
                    <div className='col-md-6'>
                        <h3>Open to all businesses!</h3>
                        <p className='info_text'>Fill out a quick form to add your business to our site at no cost! Don't see your favourite spot? Recommend a business here as well.</p>
                        <Link to='/contactus'>
                            <button type='button' className='btn btn-primary'>Register Today</button>
                        </Link>
                        {/* <a href='contactus.html'><button type='button' className='btn btn-primary'>Register Today</button></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexMainBody;