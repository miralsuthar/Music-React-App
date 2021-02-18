import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    const libraryStatusHandler = () => {
        if(libraryStatus == true){
            setLibraryStatus(false);
        }else{
            setLibraryStatus(true);
        }
    }
    return (
        <nav>
            <h1>Miral Lo-Fi</h1>
            <button onClick={libraryStatusHandler}>Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav
