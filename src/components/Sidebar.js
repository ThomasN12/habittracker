import project from '../img/icondashboard.svg';
import page from '../img/iconpage.svg';
import report from '../img/iconreport.svg';
import setting from '../img/iconsetting.svg';


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
        </div>
    </div>
    )
}

export default Sidebar;