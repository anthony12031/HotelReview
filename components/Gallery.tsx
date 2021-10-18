import styled from 'styled-components'

type props = {
    className?: string,
    imagesUrls?: string[];
}

function Gallery({className}: props){
    return (
        <div className={className}>
            <div className="gallery">
                <figure className="gallery__item">
                    <img src="img/hotel-1.jpg" alt="Photo of hotel 1" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src="img/hotel-2.jpg" alt="Photo of hotel 2" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src="img/hotel-3.jpg" alt="Photo of hotel 3" className="gallery__photo" />
                </figure>
            </div>
        </div>
    )
}

const StyledGallery = styled(Gallery)`
    .gallery {
        display: flex;

        &__photo{
        width: 100%;
        display: block;
    }
    
    }
`;

export default StyledGallery;