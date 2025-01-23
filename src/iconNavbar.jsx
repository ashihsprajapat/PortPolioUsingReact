// import Stack from '@mui/material/Stack';
// import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import PersonIcon from '@mui/icons-material/Person';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

 export function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
export function UserIcon(props) {
    return (
        <PersonIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </PersonIcon>
    );
}
export function ProjectIcon(props) {
    return (
        <DisplaySettingsIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </DisplaySettingsIcon>
    );
}
export function WorkIcon(props) {
    return (
        <AppRegistrationIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </AppRegistrationIcon>
    );
}