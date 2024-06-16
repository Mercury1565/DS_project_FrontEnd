import PropTypes from 'prop-types';

function UserGreeting(props)
{
    const welcomeMsg = <h1>Welcome, {props.username}</h1>;
    const failureMsg = <h1>Please Log in to continue</h1>;
    
    if (props.isLoggedIn){
        return welcomeMsg;
    }
    else{
        return failureMsg;
    }
    
    // Another way of performing the above
    // return{props.isLoggedIn ? welcomeMsg : failureMsg}

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {  
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;