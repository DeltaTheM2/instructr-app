// Assuming this is inside src/pages/dashboard.tsx or a similar file

import Sidebar from "@/app/components/Layout/Sidebar/Sidebar";
import { AiOutlineSetting, AiFillProfile } from 'react-icons/ai';

const CourseDashboard = () => {
    const menus = [
        {
            title: 'Topic 1',
            subMenu: true,
            subMenuItems: [
                {title: 'Lesson 1', path: '/lesson1'},
                {title: 'Lesson 2', path: '/lesson1'},
                {title: 'Lesson 3', path: '/lesson1'}
            ],
        },
        {title: 'Settings', icon: <AiOutlineSetting/>},
        {title: 'Profile', icon: <AiFillProfile/>}
    ];

    return (
        <div className="flex">
            <Sidebar menus={menus}/>

        </div>
    );
}

export default CourseDashboard;