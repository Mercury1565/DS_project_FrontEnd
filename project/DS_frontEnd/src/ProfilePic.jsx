function ProfilePic() {
    const imgURL = './src/assets/i.png';
    const handelClick = (e) => {
        e.target.style.display = "none";
        }

    return(<img onClick = {(e) => handelClick(e)} src={imgURL} ></img>)
}
export default ProfilePic