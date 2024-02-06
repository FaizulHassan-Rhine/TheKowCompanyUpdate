import Image from 'next/image';
import React, { useState } from 'react';

const YoutubeVide = ({ videoId }) => {
    const [getPlayBool, setPlayBool] = useState(false);


    return (
        <div className='w-full h-full relative' >
            {getPlayBool ?
                 <iframe className='absolute top-0 left-0 w-full h-full' width="560" height="315"
                 src={`http://www.youtube.com/embed/${videoId}?autoplay=1`}
                 title="YouTube video player" frameborder="0"
                 allowfullscreen></iframe> 
                 :
                <div onClick={() => setPlayBool(true)} className='cursor-pointer w-full h-full relative'>
                    <div className={'w-full relative h-full'}>
                        <Image src={`https://img.youtube.com/vi/${videoId}/0.jpg`} quality={100} layout='fill' objectFit='cover' />
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.4967 116.413C92.7218 116.413 116.413 92.7218 116.413 63.4967C116.413 34.2717 92.7218 10.5801 63.4967 10.5801C34.2717 10.5801 10.5801 34.2717 10.5801 63.4967C10.5801 92.7218 34.2717 116.413 63.4967 116.413Z" stroke="#F2F4F7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50.2676 47.4383C50.2676 44.9127 50.2676 43.6498 50.7954 42.9448C51.2553 42.3305 51.9594 41.9461 52.7249 41.8914C53.6034 41.8287 54.6656 42.5115 56.7901 43.8773L81.7699 59.9358C83.6135 61.1209 84.5352 61.7135 84.8536 62.4669C85.1318 63.1253 85.1318 63.8682 84.8536 64.5266C84.5352 65.28 83.6135 65.8726 81.7699 67.0577L56.7901 83.1162C54.6656 84.4819 53.6034 85.1648 52.7249 85.1021C51.9594 85.0474 51.2553 84.663 50.7954 84.0486C50.2676 83.3436 50.2676 82.0808 50.2676 79.5552V47.4383Z" stroke="#F2F4F7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                </div>
            }
        </div>
    );
};

export default YoutubeVide;