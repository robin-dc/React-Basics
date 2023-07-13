import {Link} from 'react-router-dom'

function ArtImageTile({arts}) {

    return (
        <>
            {arts.map(object => (
                <div className="box" key={object.images[0] ? object.images[0].idsid : null}>
                    <Link to={`art/${object.images[0] ? object.images[0].idsid : null}`}>
                        <img src={object.images[0] ? object.images[0].baseimageurl : null}/>
                        <p>{object.title}</p>
                    </Link>
                </div>
            ))}
        </>
     );
}

export default ArtImageTile;
