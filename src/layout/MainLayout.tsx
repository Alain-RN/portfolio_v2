import type { ReactNode } from "react";

interface MainLayoutProps {
    left: ReactNode;
    right: ReactNode;
}

function MainLayout({ left, right }: MainLayoutProps) {
    return (
        <div className="layout">
            <aside className="left">{left}</aside>
            <main className="right">{right}</main>
        </div>
    );
}

export default MainLayout;
