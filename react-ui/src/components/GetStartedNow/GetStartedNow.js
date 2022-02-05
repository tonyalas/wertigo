import { Link } from 'react-router-dom';

function GetStartedNow() {
    return (
        <>
            <div className='indexDiv2'>
                <h1 className='getstartednow'>Get Started Now</h1>
                <Link to='/discover'>
                    <button type='button' className='btn btn-primary'>Discover</button>
                </Link>
                {/* <a href='discover.html'><button type='button' className='btn btn-primary'>Discover</button></a> */}
            </div>
            <hr></hr>
        </>
    )
}
export default GetStartedNow;