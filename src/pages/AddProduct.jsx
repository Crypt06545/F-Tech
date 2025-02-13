import { useContext, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { AuthContext } from "../providers/Authprovider";
import axios from "axios";

const AddProduct = () => {
  const [tags, setTags] = useState([]);
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    productName: "",
    productImage: "",
    description: "",
    owener: {
      email: user?.email,
      photoURL: user?.photoURL,
    },
    externalLink: "",
    vote_count: 0,
  });

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_CLOUD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    const res = await fetch(import.meta.env.VITE_CLOUD_API_URL, {
      method: "POST",
      body: data,
    });

    const uploadImageUrl = await res.json();
    // console.log(uploadImageUrl.url);
    setFormData((prevData) => ({
      ...prevData,
      productImage: uploadImageUrl.url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ ...formData, tags });
    const submitForm = { ...formData, tags };
    console.log(submitForm);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-product`,
        submitForm
      );
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#141414] px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1A1A1A] p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-xl text-white mb-4 text-center">
          Submit Your Product
        </h2>

        <div>
          <label className="text-[#666666] block mb-1">
            Product Name (Required)
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            className="w-full p-2 bg-[#262626] text-white rounded-md focus:outline-none"
          />
        </div>

        <fieldset className="w-full space-y-1">
          <label
            htmlFor="files"
            className="block text-sm font-medium text-[#666666]"
          >
            Product Image
          </label>
          <input
            type="file"
            onChange={handleFileUpload}
            required
            className="w-full p-2 border border-dashed rounded-md bg-[#262626] text-white focus:outline-none"
          />
        </fieldset>

        <div>
          <label className="text-[#666666] block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 bg-[#262626] text-white rounded-md focus:outline-none"
          ></textarea>
        </div>

        <div>
          <label className="text-[#666666] block mb-1">Owner Info</label>
          <div className="flex items-center gap-3 bg-[#262626] p-2 rounded-md">
            <img
              src={user?.photoURL}
              alt="Owner"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-white">
              <p>{user?.displayName || "user"}</p>
              <p className="text-sm text-[#666666]">{user?.email}</p>
            </div>
          </div>
        </div>

        <div>
          <label className="text-[#666666] block mb-1">Tags</label>
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            inputFieldPosition="inline"
            classNames={{
              tags: "bg-[#262626] text-white p-3 rounded-md w-full",
            }}
          />
        </div>

        <div>
          <label className="text-[#666666] block mb-1">External Links</label>
          <input
            type="url"
            name="externalLink"
            value={formData.externalLink}
            onChange={handleChange}
            className="w-full p-2 bg-[#262626] text-white rounded-md focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-[#E6533C] text-white py-2 rounded-md hover:bg-red-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
