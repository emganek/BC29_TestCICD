import React from 'react';
import { Carousel as CarouselAntd } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './index.scss';

const contentStyle = {
    width: '100%',
    objectFit: 'cover',
    height: '80vh',
};
const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                color: 'red',
                fontSize: '30px',
                lineHeight: '1',
                right: '0px',
                weight: '50px',
                width: '50px',
            }}
            onClick={onClick}
        >
            <RightOutlined />
        </div>
    )
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                color: 'red',
                fontSize: '30px',
                lineHeight: '1',
                left: '0px',
                weight: '50px',
                width: '50px',
                zIndex: '1'
            }}
            onClick={onClick}
        >
            <LeftOutlined />
        </div>
    )
}

var settings = {
    dots: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

export default function Carousel() {
    return (
        <CarouselAntd draggable {...settings} arrows>
            <div>
                <img style={contentStyle} src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/07/26020212/poster-phim-hanh-dong.jpg" alt="carousel 1" />
            </div>
            <div>
                <img style={contentStyle} src='https://www.galaxycine.vn/media/wysiwyg/images/phim%20hay%20thang%20/thang%208%202015/fantastic-4-banner.jpg' alt="carousel 2" />
            </div>
            <div>
                <img style={contentStyle} src="https://www.elleman.vn/wp-content/uploads/2018/04/25/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg" alt="carousel 3" />
            </div>
        </CarouselAntd>
    )
}
