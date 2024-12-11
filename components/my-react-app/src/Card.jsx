import profilepic from './assets/pic.jpg'


function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilepic} alt="profile picture"></img>
            <h2 className='card-title'>Navya Shree</h2>
            <p className='card-text'>I Am Developer 💻</p>
        </div>
    );
}

export default Card