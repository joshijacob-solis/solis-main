import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import Groups2Icon from '@mui/icons-material/Groups2';

export const NavBarLinks =[
    {
        name:"Home",
        link: "/",
        icon: <HomeIcon/>
    },
    {
        name:"About",
        link: "/about",
        icon: <InfoIcon/>
    },
    {
        name:"Projects",
        link: "/projects",
        icon: <WorkIcon/>
    },
    {
        name:"Gallery",
        link: "/gallery",
        icon: <Groups2Icon/>
    },
    {
        name:"Services",
        link: "/services",
        icon: <MiscellaneousServicesIcon/>
    }
    ,
    {
        name:"Contacts",
        link: "/contacts",
        icon: <ContactPageIcon/>
    }
]