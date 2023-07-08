import React, { Component } from 'react';
import styles from './MainComponent.module.css';

class Main extends Component {
    // ---------------------------------------------
    // I) VARIABLES & HOOKS
    // ---------------------------------------------

    // ---------------------------------------------
    // II) HANDLERS & AUX FUNCTIONS
    // ---------------------------------------------


    // ---------------------------------------------
    // III) JSX
    // ---------------------------------------------
    render() {
        return (
            < div className={styles.main} >
                {/* <p>main</p> */}
                {this.props.children}
            </div >)

    }

}
export default Main;