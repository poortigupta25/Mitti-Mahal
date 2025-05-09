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
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Add New Product
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {['name', 'price', 'description', 'category', 'color', 'stock'].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-medium mb-1 capitalize dark:text-white"
            >
              {field}
            </label>

            {field === 'description' ? (
              <textarea
                id={field}
                rows="4"
                onChange={formik.handleChange}
                value={formik.values[field]}
                className="w-full p-3 rounded-lg border dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
              />
            ) : field === 'category' ? (
              <select
                id={field}
                onChange={formik.handleChange}
                value={formik.values[field]}
                className="w-full p-3 rounded-lg border dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
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
                className="w-full p-3 rounded-lg border dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
              />
            )}

            {formik.touched[field] && formik.errors[field] && (
              <p className="text-xs text-red-600 mt-1">{formik.errors[field]}</p>
            )}
          </div>
        ))}

        {/* Image Upload */}
        <div className="flex flex-col items-center">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover rounded-lg mb-3"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-gray-100 dark:bg-neutral-800 rounded-lg mb-3">
              <ImagePlus className="text-gray-400" />
            </div>
          )}

          <label className="cursor-pointer text-blue-600 hover:underline text-sm flex items-center gap-1">
            <UploadCloud className="w-4 h-4" />
            Upload Image
            <input type="file" hidden onChange={upload} />
          </label>

          {formik.errors.image && (
            <p className="text-xs text-red-600 mt-2">{formik.errors.image}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
