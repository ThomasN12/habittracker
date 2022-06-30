import { type } from '@testing-library/user-event/dist/type';
import project from '../img/icondashboard.svg';
import page from '../img/iconpage.svg';
import report from '../img/iconreport.svg';
import setting from '../img/iconsetting.svg';
import logout from '../img/logout1.png'

const Sidebar = () => {
    return (
        <div className="sidebar__container">
        <div className="sidebar">
            <div className="sidebar__child">
                <img alt='' src={project}/>
                <span> Dashboard</span>
            </div>
            <div className="sidebar__child">
                <img alt='' src={page}/>
                <span> Pages</span>
            </div>
            <div className="sidebar__child">
                <img alt='' src={report}/>
                <span> Reports</span>
            </div>
            <div className="sidebar__child">
                <img alt='' src={setting}/>
                <span>Setting</span>
            </div>
            <div className="sidebar__child">
                <img alt='' src={logout}/>
                <span>Log out</span>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;


