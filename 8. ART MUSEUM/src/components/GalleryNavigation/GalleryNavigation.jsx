import { NavLink, Outlet } from "react-router-dom";

function GalleryNavigation({galleries}) {
    return (
        <>
            <nav className="primary-nav">
                <h1>Harvard Gallery</h1>
                <NavLink to="/">Home</NavLink>
                {galleries.map(gallery => <NavLink to={`/gallery/${gallery.id}`} key={gallery.id}>{gallery.theme}</NavLink>)}
            </nav>
            <Outlet/>
        </>
     );
}

export default GalleryNavigation;
