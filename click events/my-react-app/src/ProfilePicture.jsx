
function ProfilePicture(){
    const imageUrl = './src/assests/untitled.jpeg';

    const handleClick =(e) => e.target.style.display ="none";
    return(<img onClick={(e) => handleClick(e)}src={imageUrl}></img>);

}

export default ProfilePicture