import {React,useState} from 'react'
// import Book1 from '../../../public/assets/Books/book1.jpg'
// import Book2 from '../../../public/assets/Books/book2.jpg'
// import Book3 from '../../../public/assets/Books/book3.jpg'
import Vector from '/assets/website/blue-pattern.png'
const url1 = 'https://cdn.chec.io/merchants/28663/assets/jmHrbyaTb3c6aRym%7Cbook1.jpg';
const url2 = 'https://cdn.chec.io/merchants/28663/assets/il0F5AytRzE9fdoO%7C1.jpg';
const url3 = 'https://cdn.chec.io/merchants/28663/assets/pihstQgqSOde2WFB%7C1.jpg';
const ImageList = [
    {
      id: 1,
      img: url1,
      title: "As a Man Thinketh",
      description:
        "In As a Man Thinketh, James Allen points out the power of thoughts in shaping our realities. Often, we think that we are the victims of circumstance while in truth our thoughts, actions, and habits create the circumstances we dislike. The solution is to cultivate better thoughts just like we would treat a garden. Everyone should read it",
        author : "James Allen",
    },
    {
      id: 2,
      img: url2,
      title: "Relativity",
      description:
        "It is known as special relativity because it applies only to special cases: frames of reference in constant, unchanging motion. In 1915, Einstein published the general theory of relativity, which applies to frames that are accelerating with regard to each other. Time does not pass at the same rate for everyone.",
        author : "Albert Einstein",
    },
    {
      id: 3,
      img: url3,
      title: "The Origin of Species",
      description:
        "Darwin’s theory is based on the notion of variation. It argues that the numerous traits and adaptations that differentiate species from each other also explain how species evolved over time and gradually diverged. Variations in organisms are apparent both within domesticated species and within species throughout the natural world. Variations in colors, structures, organs, and physical traits differentiate a multitude of species from one another. Heredity is the mechanism that perpetuates variations, Darwin argues, as traits are passed from parents to offspring.",
        author : "Charles Darwin",
    },
  ];

const Hero = () => {

  const [imageId,setImageId] = useState(url1);

  const [title,setTitle] = useState("As a Man Thinketh");

  const [description,setDescription] = useState("In As a Man Thinketh, James Allen points out the power of thoughts in shaping our realities. Often, we think that we are the victims of circumstance while in truth our thoughts, actions, and habits create the circumstances we dislike. The solution is to cultivate better thoughts just like we would treat a garden. Everyone should read it");

  const [author,setAuthor] = useState("James Allen")

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    // height : "100%",
  };
  return (<>
  
        <div className='min-h-[550px] sm:min-h[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200' style={bgImage}>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* {text-content-section} */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 className='text-5xl sm:text-6xl lg:text7xl font-bold'>
                            {title}
                            <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary text-right text-sm        to-secondary'>
                                 by {author}
                            </p>
                        </h1>
                        <p className='text-sm'>{description}
                        </p>
                        <div>
                            <button
                            className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 mt-4'>
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/* {Image Section} */}
                    <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                    {/* {main image} */}
                    <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
                    <img src={imageId} alt="" 
                        className='w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'
                    />
                    </div>
                    {/* {other image list} */}
                    <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full'>
                        {
                            ImageList.map((item,index)=>(
                                <img key={index} src={item.img} className='max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200' 
                                    onClick={
                                        ()=>{
                                            setImageId(item.id===1 ? url1 : item.id===2?url2:url3);   
                                            setTitle(item.title);
                                            setDescription(item.description); 
                                            setAuthor(item.author);   
                                    }}
                                />
                            ))
                        }
                    </div>

                    </div>
                </div>
            </div>
      
        </div>
  </>
)};
export default Hero