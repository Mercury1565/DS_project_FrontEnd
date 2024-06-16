function Button()
{
    const handleClick2 = (name) => {
        console.log('stop clicking me', name);
    }

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count ++;
            console.log('You clicked me ' , count, 'times');
        }
        else{
            console.log(name , ' dont you tired of being clicked on.');
        }
    }

    const handleClick3 = (e) => {
        e.target.textContent = "HORRAH !!!"
    }

    return (<button onClick = {(e) => handleClick3(e)} >Click me</button>)
}
export default Button