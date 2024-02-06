import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRupeeSign } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import BookCard from '../BookCards/BookCard';

const BooksData = [
    {
      "BookId": 1,
      "Title": "The Jungle Book",
      "Author": "author1",
      "Genre": "genre1",
      "Price": 10,
      "PublishYear": "2021",
      "Image": "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW%7C2.jpg",
      "Description": "description1",
      "AvailQuantity": 5,
      "SoldQuantity": 2,
      "Language": "English",
      "OverallRating": 70,
      "TotalReviews": 8
    },
    {
      "BookId": 2,
      "Title": "Sherlock Homes",
      "Author": "author2",
      "Genre": "genre2",
      "Price": 15,
      "PublishYear": "2019",
      "Image": "https://cdn.chec.io/merchants/28663/assets/L2Cj334oBGjdbHmK%7C1.jpg",
      "Description": "description2",
      "AvailQuantity": 8,
      "SoldQuantity": 4,
      "Language": "Spanish",
      "OverallRating": 85,
      "TotalReviews": 12
    },
    {
      "BookId": 3,
      "Title": "Treasure Island",
      "Author": "author3",
      "Genre": "genre3",
      "Price": 20,
      "PublishYear": "2020",
      "Image": "https://cdn.chec.io/merchants/28663/assets/cqpteRf6VzYXJeLC%7C71+f+GXLk4L.jpg",
      "Description": "description3",
      "AvailQuantity": 3,
      "SoldQuantity": 1,
      "Language": "French",
      "OverallRating": 60,
      "TotalReviews": 5
    },
    {
        "BookId": 4,
        "Title": "book2",
        "Author": "author2",
        "Genre": "genre2",
        "Price": 15,
        "PublishYear": "2019",
        "Image": "https://cdn.chec.io/merchants/28663/assets/L2Cj334oBGjdbHmK%7C1.jpg",
        "Description": "description2",
        "AvailQuantity": 8,
        "SoldQuantity": 4,
        "Language": "Spanish",
        "OverallRating": 85,
        "TotalReviews": 12
      },
      {
        "BookId": 5,
        "Title": "book3",
        "Author": "author3",
        "Genre": "genre3",
        "Price": 20,
        "PublishYear": "2020",
        "Image": "https://cdn.chec.io/merchants/28663/assets/cqpteRf6VzYXJeLC%7C71+f+GXLk4L.jpg",
        "Description": "description3",
        "AvailQuantity": 3,
        "SoldQuantity": 1,
        "Language": "French",
        "OverallRating": 60,
        "TotalReviews": 5
      },
      {
        "BookId": 6,
        "Title": "The Jungle Book",
        "Author": "author1",
        "Genre": "genre1",
        "Price": 10,
        "PublishYear": "2021",
        "Image": "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW%7C2.jpg",
        "Description": "description1",
        "AvailQuantity": 5,
        "SoldQuantity": 2,
        "Language": "English",
        "OverallRating": 70,
        "TotalReviews": 8
      },
  ];
  

const BestBook = () => {
    // const [books,setBooks] = useState([]);
    const navigate = useNavigate();
    const routeChange = (idx , book) => {
        // console.log('Navigating to:', `/my_book/${idx}`,book);
        navigate(`/my_book/${idx}`,{ state: { book: book} });
      };

    // useEffect(()=>{

    // },[])
  return (
    <div className='py-10'>
        <div className="container placeholder-gray-100">
        {/* header */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from bg-primary to-secondary'>Best Books</p>
            <h1 className='text-3xl font-bold'>Top Books</h1>
            <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adip Eos, fugiat numquam aliquam molesti sdam nemo a sed odio quasi magni?{" "} 
            </p>
        </div>
        {/* Card  */}
        <div>
            <div className=' grid grid-cols-2 sm:grid-cols-3 place-items-center gap-5 gap-y-16 lg:grid-cols-5'>
                {
                    BooksData.map((data)=>(
                        <div className='space-y-3 ' key={data.BookId}>
                            <img src={data.Image} alt="" className='h-[220px] w-[170px] object-cover rounded-md cursor-pointer ' onClick={() => {
                            routeChange(data.BookId,data);
                            }} />
                            {/* <div className='absolute top-0 right-1 p-2'>
                                <FaRegHeart className='w-4 h-4 text-red-500'/>
                            </div> */}
                            <div>
                                <h2 className='font-semibold '> {data.Title}</h2>
                                <p className=' text-sm text-gray-700 dark:text-gray-400'>{data.Author}</p>
                            </div>
                            <div className='font-semibold text-md'> Price : {" "}
                            <FaRupeeSign  className='inline-block'/>
                                {data.Price}
                            </div>
                            <div className='flex justify-center items-center'>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 w-[170px] rounded-sm flex items-center gap-3 hover:scale-105 duration-300'>Add to Cart</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
        <div className='my-16 px-4 lg:px-10'>
        <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper w-full h-full"
            >
                
                {
                    BooksData.map(book=> 
                        <SwiperSlide key={book.BookId}>
                            <Link to="/">
                                <div>
                                    <img src={book.Image} alt=""  className='h-[260px] w-[240px] object-cover rounded-md'/>
                                </div>
                                <div>
                                    <div>
                                        <h3>{book.Title}</h3>
                                        <p>{book.Author}</p>
                                    </div>
                                    <div>
                                    <FaRupeeSign  className='inline-block'/>
                                       {book.Price}
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
        </div>
    </div>
  )
}

export default BestBook