import "./Layout.scss"

import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
    const menuItems = [
        {
            href: '/',
            title: 'Home',
        },
        {
            href: '/uikit',
            title: 'Uikit',
        }
    ];

    <li><NavLink to="/">Home</NavLink></li>
    return (
        <div className="layout">           

                <aside className="layout__aside">
                    <header className="layout__header">
                        Aurora
                    </header>

                    <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li key={title}>
                                    <NavLink to={href} >
                                        <p>{title}</p>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

            <main className="layout__main">
                <Outlet />
            </main>
        </div>
    );
}