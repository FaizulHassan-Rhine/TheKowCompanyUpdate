import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import { Link } from 'react-router-dom'

const Slider3D = () => {
  const sliderList = [
    {
      "image": "/img/Fashion Accessories.jpg",
      "label": "Fashion Accessories",
      "link": "#"
    },
    {
      "image": "/img/Tech Accessories.jpg",
      "label": "Tech Accessories",
      "link": "#"
    },
   
    {
      "image": "/img/Packaging.jpg",
      "label": "Packaging",
      "link": "#"
    },
    {
      "image": "/img/Cosmetics-update.jpg",
      "label": "Cosmetics",
      "link": "#"
    },
    {
      "image": "/img/Furniture.jpg",
      "label": "Furniture",
      "link": "#"
    },
    {
      "image": "/img/Tech Equipment.jpg",
      "label": "Tech Equipment",
      "link": "#"
    },
  
   
  ]
  return (
    <div id='3d' className='pb-10 pt-0 '>
<div className='flex justify-center gap-7 my-10'>
          <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
          <h1 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>3D</h1>
          <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
        </div>
        <div>

<div className='2xl:container 2xl:mx-auto '>
    <div className='relative w-full '>
        <Carousel uniqueId="id_125" delay={5000}
            item={3}
            indicators={false}
            responsive={[
                {
                    breakPoint: 641,
                    item: 1
                },
                {
                    breakPoint: 1025,
                    item: 2,
                }
            ]
            }
        >
            {sliderList.map((item, index) => (
                // <div className='h-full px-2'><img src={item.image}/></div>
                <div className='relative flex flex-col md:block mx-2 cursor-pointer'>
                    <div>
                        <img src={item.image} className="w-full object-cover" />
                    </div>
                    <div className='w-full flex gap-3 py-4 justify-center'>
                        <h5 className='text-black font-medium'>{item.label}</h5>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
</div>
</div>
      <div className='container mx-auto mt-10'>
        
        <p className='text-xs text-center md:text-sm px-[54px]'>{`Visualize your brand in a captivating three-dimensional spectacle, brought to life by a skilled team of 3D artists. Whether showcasing products with realism, crafting engaging animations, or building immersive virtual experiences, we've got you covered. Our meticulous digital replicas capture every nuance and detail with astonishing accuracy, breathing
life into your products.`}</p>
        <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`From intricate design elements to functional features, our 3D models empower customers to explore from every angle before purchase. In architectural visualization, we transcend blueprints, offering a virtual world where structures and spaces come alive. This immersive experience allows stakeholders to comprehend designs with unparalleled clarity, facilitating informed decision-making for architects, designers, and clients.`}</p>

        <div className='flex justify-center '>
          <Link to="/contact-us" className='text-xs md:text-sm font-semibold text-white px-6 py-1 bg-[#7C9C30] rounded-3xl'>Model Realistic 3D Assets</Link>
        </div>
      </div>
    </div>
  )
}

export default Slider3D;