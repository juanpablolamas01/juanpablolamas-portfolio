'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const InfiniteCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel-container mb-30" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
            <div
                className="carousel-track"
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        style={{
                            minWidth: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            width={1200}
                            height={800}
                            sizes="100%"
                            style={{width:"100%", height:"auto", objectFit:"contain"}}
                            src={img.src}
                            alt={img.alt}
                        />
                    </div>
                ))}
            </div>
            {/* Navigation dots */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
            }}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: currentIndex === index ? '#fff' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
