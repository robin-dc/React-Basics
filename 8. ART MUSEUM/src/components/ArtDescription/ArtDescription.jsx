import { useParams } from "react-router-dom";

function ArtDescription({art}) {
    const {artId} = useParams()

    const artDes = art.objects.map(art => art.images[0]).find(art => art.idsid === Number(artId))

    if(artId === null){
        return <h2>nONE</h2>
    }
    return (
        <>
            {art && <div className="container art-des">
                        <h2>{artDes.copyright}</h2>
                        <small>Date Created: {artDes.date}</small>
                        <small>Rendition Number: {artDes.renditionnumber}</small>
                        <img src={artDes.baseimageurl} alt="" />
                    </div>}
        </>
     );
}

export default ArtDescription;
