const Notification = (props) => {

    const notificationStyles = {
         padding: '5px 5px',
        backgroundColor: props.status == true ? '#4CAF50' : '#f44336', // Green for success
        color: 'white',
        borderRadius: '5px',
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '9999',
        height : '30px',
        width : '300px',
        fontSize : '16px'

        
    }

    return(
        <>
        <h1 style={notificationStyles}>{props.message}</h1>
        </>
    )
}

export default Notification

