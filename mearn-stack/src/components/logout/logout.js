import React from 'react'
export default class Logout extends React.Component{
    constructor(props){
        super(props)

        sessionStorage.clear()

        this.props.cambiarLogin(false)
    }
    render(){

        return(
            <div>

            </div>
        )
    }
}