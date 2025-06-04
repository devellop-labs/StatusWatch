import HeaderAuth from '../components/HeaderAuth';
import HeaderDefault from '../components/HeaderDefault';
import Breadcrumbs from '../components/Breadcrumbs';
import { useAuth } from '../auth/useAuth';

export default function Header() {
    const { isAdmin } = useAuth();

    return (
        <>
            {isAdmin ? <HeaderAuth /> : <HeaderDefault />}
            {isAdmin && <Breadcrumbs />}
        </>
    );
}