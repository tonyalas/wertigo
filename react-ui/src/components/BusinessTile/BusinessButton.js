function BusinessButton(props) {
    return (
        <div className="collapseButtonSection">
            <button className="btn btn-primary collapseButton" type="button" data-bs-toggle="collapse"
                data-bs-target="#thebarbersinwindsor" aria-expanded="false" aria-controls="thebarbersinwindsor">
                Hours
            </button>
            <div className="collapse" id="thebarbersinwindsor">
                <div className="card card-body">
                    <p>
                        Sunday: <b>Closed</b>
                        <br />
                        Monday - Saturday: <b>9am to 6pm</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BusinessButton;