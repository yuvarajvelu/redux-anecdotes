import React from 'react'
import { connect } from 'react-redux'
import { disableNotification } from '../reducers/notificationReducer'

let notification = ''
let timeToDisplay
const Notification = (props) => {
  if((notification !== '') && (props.message !== notification)) {
    clearTimeout(timeToDisplay)
  }
  notification = props.message
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification !== '') {
    style.display = ''
    timeToDisplay = setTimeout(() => {
      props.disableNotification()
    },10000)
  } else {
    style.display = 'none'
  }
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {message: state.message}
}

export default connect(mapStateToProps, { disableNotification })(Notification)