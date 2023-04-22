const UsersHomeLikedEventComponent = ({eventoryEvent}) => {
    return (
        (eventoryEvent && (
            <div className="col-12 col-md-6 col-lg-4 col-xxl-3 p-2">
                <div className="card m-1">
                    <img className="card-img-top events-card-image" src="/images/eventory-exclusive-img.png"/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{eventoryEvent.name}</h5>
                        <p className="card-subtitle mb-2 text-muted">{eventoryEvent.date}</p>
                        <h6 className="card-subtitle text-muted">{eventoryEvent.address}</h6>
                    </div>
                </div>
            </div>
        ))
    )
};

export default UsersHomeLikedEventComponent;