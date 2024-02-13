import axios from "axios";

const SearchBook = async (formData, setBooksData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/searchbook/", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      setBooksData(data);
    } else {
      console.error("Error:");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default SearchBook;
