function LocationBox(location){
    return (
        <view style={{flex:1:flexDirection="row"}}>
            {location}
        </view>
    );
}

function LocationBar(locations){
    return(
        <section className="results">
            <div className="container">{locations.map(LocationBox)}</div>
        </section>
    )
}