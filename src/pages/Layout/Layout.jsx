import { Outlet } from "react-router-dom";
import Aside from "../../components/Aside/Aside"

export default function Layout() {
    return (
        <div className="rv-layout">
            <aside className="rv-layout__aside">
                <header className="rv-layout__header">
                    RV logo
                </header>

                <Aside />
            </aside>

            <main className="rv-layout__main">
                <Outlet />
            </main>
        </div>
    );
}