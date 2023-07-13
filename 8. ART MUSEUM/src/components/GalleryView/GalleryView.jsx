import {Outlet, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/ArtImageTile";

function GalleryView({galleries, setArt}) {
    const {galleryId} = useParams()
    const gallery = galleries.find(gallery => gallery.id === Number(galleryId))
    setArt(gallery)

    return (
        <>
            <div className="container">
                <h2>{gallery.name}</h2>
                <p>{gallery.labeltext.substring(0, 600)}</p>
                <div className="arts">
                    <ArtImageTile arts={gallery.objects}/>
                </div>
                <Outlet/>
            </div>
        </>
     );
}

export default GalleryView;
