
import ReactCompareImage from 'react-compare-image'
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import Heading2D from '../../component3d/Heading/Heading2D'

const ImageSlider = () => {
    const sliderList = [
      
        {
            "after": "/img/Image_Slide_2D/Background-Removal-&-Shadow-Creation_B.jpg",
            "before": "/img/Image_Slide_2D/Background-Removal-&-Shadow-Creation_A.jpg",
            "lebel": "Background removal"
        },
        {
            "after": "/img/Image_Slide_2D/Ghost-Mannequin_B.jpg",
            "before": "/img/Image_Slide_2D/Ghost-Mannequin_A.jpg",
            "lebel": "Ghost Mannequin"
        }, 
        {
            "after": "/img/Image_Slide_2D/Photo-Recolor_B.jpg",
            "before": "/img/Image_Slide_2D/Photo-Recolor_A.jpg",
            "lebel": "Photo Recolor"
        },
        {
            "after": "/img/Image_Slide_2D/Hair-Masking_B.jpg",
            "before": "/img/Image_Slide_2D/Hair-Masking_A.jpg",
            "lebel": "Hair Masking"
        },
       
        {
            "after": "/img/Image_Slide_2D/Photo-Retouch_B.jpg",
            "before": "/img/Image_Slide_2D/Photo-Retouch_A.jpg",
            "lebel": "Photo Retouch"
        }
        ,
        {
            "after": "/img/Image_Slide_2D/Color-Correction_B.jpg",
            "before": "/img/Image_Slide_2D/Color-Correction_A.jpg",
            "lebel": "Color Correction"
        },
    ]


    return (
        <div className='pb-0 pt-5' id='services'>
            
            <Heading2D
        className="pt-6 pb-10"
        titleClassName="w-[500px]"
        title="IMAGES"
      />
                
            <div className='2xl:container 2xl:mx-auto '>
                <div className='relative w-full h-[400px]'>
                    <Carousel uniqueId="id_1011"
                        delay={5000}
                        indicators={false}
                        item={2}
                        responsive={[
                            {
                                breakPoint: 641,
                                item: 1
                            },
                            {
                                breakPoint: 1025,
                                item: 2,
                            }
                        ]}
                    >
                        {sliderList.map((item, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className='flex flex-col mx-1 gap-2'>

                                <div key={index} className='z-10 float-left relative h-full'>
                                    <ReactCompareImage
                                        leftImage={item.after}
                                        rightImage={item.before}
                                    />
                                </div>
                                <h4 className='text-2xl font-semibold text-kow-text-black uppercase text-center first-letter:text-3xl first-letter:font-bold'>{item.lebel}</h4>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            
        </div>
    )
}

export default ImageSlider;