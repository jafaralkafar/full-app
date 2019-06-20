import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div style={styles.header}>
            <div id="logo" style={styles.logo}>
                <Link to="/">Boo!</Link>
            </div>
            <div id="navbar" style={styles.navbar}>
                { props.user && <Link to='/' onClick={props.logout}>Logout</Link> }
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user

    return { user }
}

export default connect(mapStateToProps)(Header)

let styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    }
}