import React from 'react';
import img1 from '../../../../assets/bannerImg/img1.jpg'
import img2 from '../../../../assets/bannerImg/img2.jpg'
import img3 from '../../../../assets/bannerImg/img3.jpg'
import img4 from '../../../../assets/bannerImg/img4.jpg'
const Banner = () => {
    return (
        <div>

            <div className='ml-10 mr-10'>
                <div className='container mx-auto mr-10'>
                    <div className="carousel w-full h-3/4 mr-4">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={img3} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={img2} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={img1} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={img4} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;