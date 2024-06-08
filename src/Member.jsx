

import PropTypes from 'prop-types';

function Member(props) {
    console.log(props)

    return (
        <div className="card">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.fname} {props.lname}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>  
        </div>
    )
}

Member.propTypes = {
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired, // This line is not present in the original code, but it is needed for the code to work
    /* username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired, */ 
    // thumbnail: PropTypes.instanceOf(Image)
};

export default Member;
