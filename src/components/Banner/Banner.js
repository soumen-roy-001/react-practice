import React from 'react'
import { Carousel } from 'react-bootstrap'
//import BannerImages from '../../assets/images/banners'
const CorouselItems =[
    {
        imagePath: require('../../assets/images/banners/b4.jpg'),
        caption: 'First slide label',
        content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
        imagePath: require('../../assets/images/banners/b5.jpg'),
        caption: 'Second slide label',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        imagePath: require('../../assets/images/banners/b6.jpg'),
        caption: 'Third slide label',
        content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
]
const all = CorouselItems.map(each => {
    return (<Carousel.Item key={each.imagePath}>
        <img
            className="d-block w-100"
            src={each.imagePath}
            alt={each.caption}
        />
        <Carousel.Caption>
            <h3>{each.caption}</h3>
            <p>{each.content}</p>
        </Carousel.Caption>
    </Carousel.Item>)
})
// const carouselDiv = {
//     marginTop: '100px'
// }
const banner = (props) => {
    return (
        // <div style={carouselDiv}>
            <Carousel >
                {all}
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        // </div>
    )
}
export default banner
