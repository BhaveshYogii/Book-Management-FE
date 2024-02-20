import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import SellerLayoutHoc from '../../layout/Seller.layout.jsx';
import { useLocation } from 'react-router-dom';
import SellerEditService from '../Service/SellerEditService';
import { ToastContainer } from 'react-toastify';

const EditBookForm = (props) => {
    let session = document.cookie.match(/session_key=([^;]*)/);
    
    const location = useLocation();
    const { book } = location.state;
    const [title, setTitle] = useState(book.Title || '');
    const [author, setAuthor] = useState(book.Author || '');
    const [image, setImage] = useState(book.Image || '');
    const [genre, setGenre] = useState(book.Genre || '');
    const [price, setPrice] = useState(book.Price || '');
    const [publishYear, setPublishYear] = useState(book.PublishYear || '');
    const [Language, setLanguage] = useState(book.Language || '');
    const [availQuantity, setAvailQuantity] = useState(book.AvailQuantity || '');
    const [description, setDescription] = useState(book.Description || '');
    const BookCategory = [
        "Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Biography",
        "Autobiography",
        "History",
        "Motivation",
        "Religion",
        "Travel",
        "Comedy"
    ]
    const [category,setCategory] = useState(BookCategory[0]);
    const handleChangeCategory=(event)=>{
        setCategory(event.target.value);
    }
    const LanguageOptions = [
        "English",
        "Hindi",
        "Spanish",
        "French",
        "German",
        "Chinese",
        "Japanese",
        "Arabic",
        "Russian",
        "Portuguese"
    ];
    // const [language, setLanguage] = useState(LanguageOptions[0]);
    // const handleLanguageChange = (event) => {
    //     setLanguage(event.target.value);
    // };
   
    const handlesaveclick = (event) => {
        event.preventDefault();
        const updatedBook = {
            Title: title,
            Author: author,
            Image: image,
            Genre: genre,
            Price: price,
            PublishYear: publishYear,
            Language: Language,
            AvailQuantity: availQuantity,
            Description: description,
            SellerObj:book.SellerObj,
            BookId:book.BookId,
        };
    
        if (session == null) {
            toast.error("Log in First and try again.");
            props.setAuthenticate(false);
        } else {
            SellerEditService(session, updatedBook);
        }    
    };

  return (
    <div>
    <h2 className="mb-8 h-full text-4xl font-bold text-center my-5">
        Edit Book
      </h2>
    <div className='px-4 mt-12 flex justify-center h-full' style={{minHeight: "82vh"}}>
    <form onSubmit={handlesaveclick} className="flex md:w-[900px] flex-col flex-wrap gap-4 justify-center">
    {/* 1st Row */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Title" value="Book Title" />
                </div>
                <TextInput id="Title" type="text" placeholder="Title of a Book" name='Title' value={title} onChange={(event) => setTitle(event.target.value)} required />
            </div>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Author" value="Book Author" />
                </div>
                <TextInput id="Author" type="text" placeholder="Author of a Book" name='Author' value={author} onChange={(event) => setAuthor(event.target.value)} required />
            </div>
        </div>
        {/* 2nd Row  */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Image" value="Book Image URL" />
                </div>
                <TextInput id="Image" type="text" placeholder="Book Image URL" name='Image' value={image} onChange={(event) => setImage(event.target.value)} required />
            </div>
            <div className='w-1/2'>
            <div className="mb-2 block">
                <Label htmlFor="Genre" value="Book Genre" />
                </div>
                <Select id='Genre' name='Genre' className='w-full rounded' value={genre} onChange={(event)=>{
                    setGenre(event.target.value)
                }}>
                    {
                        BookCategory.map((option)=> <option key={option} value={option}>{option}</option>)
                    }
                </Select>
            </div>
        </div>
        {/* 3rd Row  */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Price" value="Book Price" />
                </div>
                <TextInput id="Price" type="number" placeholder="Price of a Book" name='Price' value={price} onChange={(event) => setPrice(event.target.value)} required />
            </div>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="PublishYear" value="Publish Year" />
                </div>
                <TextInput  id="PublishYear" type="text" placeholder="Publish Year" name='PublishYear' value={publishYear} onChange={(event) => setPublishYear(event.target.value)} required />
            </div>
        </div>
        {/* Book Description  */}
        {/* 4th Row  */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Language" value="Book Language" />
                </div>
                <Select id='Language' name='Language' className='w-full rounded' value={Language} onChange={(event)=>{
                    setLanguage(event.target.value);
                }}>
                {LanguageOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
                </Select>
            </div>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="AvailQuantity" value="Quantity" />
                </div>
                <TextInput  id="AvailQuantity" type="number" placeholder="Quantity" name='AvailQuantity'value={availQuantity} onChange={(event) => setAvailQuantity(event.target.value)} required />
            </div>
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="Description" value="Book Description" />
            </div>
            <Textarea id="comment" placeholder="Write Book Description..." required rows={6} name='Description' value={description} onChange={(event) => setDescription(event.target.value)} className='py-3 px-3'  />
      </div>
      <Button type="submit" className='mt-5 mb-10'>Save</Button>
    </form>
    </div>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
export default SellerLayoutHoc(EditBookForm);