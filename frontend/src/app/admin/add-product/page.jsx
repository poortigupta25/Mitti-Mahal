'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { ImagePlus, UploadCloud } from 'lucide-react';

const ProductSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  price: Yup.number().required('Price is required').positive('Must be positive'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  color: Yup.string().required('Color is required'),
  stock: Yup.number().required('Stock is required').min(0, 'Stock must be at least 0'),
});

const AddProduct = () => {
  const [preview, setPreview] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      category: '',
      color: '',
      image: '',
      stock: '',
    },
    validationSchema: ProductSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/add`, values);
        toast.success('Product added successfully');
        formik.resetForm();
        setPreview('');
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
  });

  const upload = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mittimahal');

    axios
      .post('https://api.cloudinary.com/v1_1/djzngs8yj/image/upload', fd)
      .then((result) => {
        toast.success('Image uploaded');
        setPreview(result.data.url);
        formik.setFieldValue('image', result.data.url);
      })
      .catch(() => toast.error('Failed to upload image'));
  };

  return (
    <div className="max-w-xl mx-auto my-8 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 dark:from-amber-900 dark:via-amber-800 dark:to-yellow-900 p-7 rounded-3xl shadow-2xl border-2 border-amber-300 dark:border-yellow-900 relative overflow-hidden">
      {/* Decorative Amber & Brown Circles */}
      <div className="absolute -top-10 -left-10 w-28 h-28 bg-amber-300 dark:bg-yellow-900 rounded-full opacity-30 blur-2xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-yellow-900 dark:bg-amber-700 rounded-full opacity-20 blur-2xl z-0"></div>
      <h2 className="text-3xl font-extrabold text-center text-amber-800 dark:text-yellow-100 mb-7 tracking-tight drop-shadow-lg z-10 relative">
        Add New Product
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6 z-10 relative">
        {['name', 'price', 'description', 'category', 'color', 'stock'].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-base font-semibold mb-1 capitalize text-yellow-900 dark:text-yellow-100 tracking-wide"
            >
              {field}
            </label>
            {field === 'description' ? (
              <textarea
                id={field}
                rows="4"
                onChange={formik.handleChange}
                value={formik.values[field]}
                className="w-full p-3 rounded-xl border-2 border-yellow-900 dark:border-yellow-800 bg-amber-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition placeholder:text-yellow-700 dark:placeholder:text-yellow-200"
                placeholder="Enter product description..."
              />
            ) : field === 'category' ? (
              <select
                id={field}
                onChange={formik.handleChange}
                value={formik.values[field]}
                className="w-full p-3 rounded-xl border-2 border-yellow-900 dark:border-yellow-800 bg-amber-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition"
              >
                <option value="" disabled>Select category</option>
                <option value="utensils">Utensils</option>
                <option value="pottery">Pottery</option>
                <option value="jewellery">Jewellery</option>
                <option value="home decor">Home Decor</option>
              </select>
            ) : (
              <input
                type={field === 'price' || field === 'stock' ? 'number' : 'text'}
                id={field}
                onChange={formik.handleChange}
                value={formik.values[field]}
                className="w-full p-3 rounded-xl border-2 border-yellow-900 dark:border-yellow-800 bg-amber-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition placeholder:text-yellow-700 dark:placeholder:text-yellow-200"
                placeholder={`Enter ${field}`}
              />
            )}
            {formik.touched[field] && formik.errors[field] && (
              <p className="text-xs text-red-600 mt-1 font-medium">{formik.errors[field]}</p>
            )}
          </div>
        ))}
        {/* Image Upload */}
        <div className="flex flex-col items-center">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover rounded-2xl mb-3 border-4 border-yellow-900 dark:border-yellow-800 shadow-lg bg-amber-100 dark:bg-yellow-900"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-amber-100 dark:bg-yellow-900 rounded-2xl mb-3 border-2 border-dashed border-yellow-900 dark:border-yellow-800">
              <ImagePlus className="text-amber-400 w-10 h-10" />
            </div>
          )}
          <label className="cursor-pointer text-yellow-900 hover:text-amber-700 hover:underline text-base flex items-center gap-2 dark:text-yellow-100 font-semibold">
            <UploadCloud className="w-5 h-5" />
            Upload Image
            <input type="file" hidden onChange={upload} />
          </label>
          {formik.errors.image && (
            <p className="text-xs text-red-600 mt-2 font-medium">{formik.errors.image}</p>
          )}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-yellow-50 bg-gradient-to-r from-yellow-900 via-amber-600 to-amber-700 hover:from-yellow-800 hover:to-amber-800 rounded-xl font-bold text-lg shadow-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
