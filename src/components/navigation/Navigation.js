import '../../styles/navigation.css';
import { Link, useHistory } from 'react-router-dom';
import { UserInformations } from '../signin/UserInformations';


function Navigation(){
    const history = useHistory();
    const isHome = '/' === history.location.pathname;
    const isCreateQuestion = '/add' === history.location.pathname;
    const isLeaderBoard = '/leaderboard' === history.location.pathname;
    const isSignIn = '/signin' === history.location.pathname;

    return(
        <div className='navigation'>
            <nav>
                <Link
                    to='/'
                    className={isHome ? 'trapezoid': ''}>Home</Link>
                <Link
                    to='/add' className={isCreateQuestion ? 'trapezoid': ''}>New Question</Link>
                <Link
                    to='/leaderboard'
                    className={isLeaderBoard ? 'trapezoid': ''}>Leader Board</Link>
                <UserInformations  isSignIn={isSignIn}/>
            </nav>
        </div>
    )
}

export { Navigation }