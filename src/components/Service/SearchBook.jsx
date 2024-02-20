import axios from "axios";

const SearchBook = async (formData, setBooksData) => {
  try {
    const response = await fetch("http://52.66.121.111:8000/searchbook/", {
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
