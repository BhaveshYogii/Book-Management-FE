import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { upload } from '../Service/UploadBookService';
import Navbar from '../NavBar/Navbar'
import SellerNavBar from './SellerNavbar';
const UploadBooks = () => {
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
        // console.log(event.target.value);
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
    const [language, setLanguage] = useState(LanguageOptions[0]);
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const Title = form.Title.value;
        const Author = form.Author.value;
        const Image = form.Image.value;
        const Genre = form.Genre.value;
        const Price = form.Price.value;
        const PublishYear = form.PublishYear.value;
        const Language = form.Language.value;
        const AvailQuantity = form.AvailQuantity.value;
        const Description = form.Description.value;
        // console.log(AvailQuantity);
        const bookObject = {Title,Author,Image,Genre,Price,PublishYear,Language,AvailQuantity,Description};
        upload(bookObject).then(()=>{
            toast.success('Book Uploaded Successfully');
            // navigate('/login');
          })
          .catch((error)=>{
          })
    }
  return (
    <div>
    <SellerNavBar/>
    <h2 className='mb-8 h-full text-4xl font-bold text-center my-5'>Upload A Book</h2>
    <div className='px-4 mt-12 flex justify-center h-full' style={{minHeight: "82vh"}}>
    <form onSubmit={handleSubmit} className="flex md:w-[900px] flex-col flex-wrap gap-4 justify-center">
    {/* 1st Row */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Title" value="Book Title" />
                </div>
                <TextInput id="Title" type="text" placeholder="Title of a Book" name='Title' required />
            </div>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Author" value="Book Author" />
                </div>
                <TextInput id="Author" type="text" placeholder="Author of a Book" name='Author' required />
            </div>
        </div>
        {/* 2nd Row  */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Image" value="Book Image URL" />
                </div>
                <TextInput id="Image" type="text" placeholder="Book Image URL" name='Image' required />
            </div>
            <div className='w-1/2'>
            <div className="mb-2 block">
                <Label htmlFor="Genre" value="Book Genre" />
                </div>
                <Select id='Genre' name='Genre' className='w-full rounded' value={category} onChange={handleChangeCategory}>
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
                <TextInput id="Price" type="number" placeholder="Price of a Book" name='Price' required />
            </div>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="PublishYear" value="Publish Year" />
                </div>
                <TextInput  id="PublishYear" type="text" placeholder="Publish Year" name='PublishYear'required />
            </div>
        </div>
        {/* Book Description  */}
        {/* 4th Row  */}
        <div className='flex gap-8'>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="Language" value="Book Language" />
                </div>
                <Select id='Language' name='Language' className='w-full rounded' value={language} onChange={handleLanguageChange}>
                {LanguageOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
                </Select>
            </div>
            <div className='w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="AvailQuantity" value="Quantity" />
                </div>
                <TextInput  id="AvailQuantity" type="number" placeholder="Quantity" name='AvailQuantity'required />
            </div>
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="Description" value="Book Description" />
            </div>
            <Textarea id="comment" placeholder="Write Book Description..." required rows={4} name='Description' className='py-3 px-3'  />
      </div>
      <Button type="submit" className='mt-5 mb-10'>Upload Book</Button>
    </form>
    </div>
    </div>
  )
}
export default UploadBooks;