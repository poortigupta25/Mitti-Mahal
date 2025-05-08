'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const ProductSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  price: Yup.number().required('Price is required').positive('Must be positive'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  color: Yup.string().required('Color is required'),
});

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      category: '',
      color: '',
    },

    onSubmit: async (values) => {
      console.log(values);

      try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/add`, values)
          console.log(res.status);
          console.log(res.data);
          toast.success('Product added successfully');
      } catch (error) {
          console.log(error);
          toast.error('Something went wrong');
      }
      
  },
  validationSchema: ProductSchema,

  });

  const upload = (e) => {

    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mittimahal')
    fd.append('colud_name', 'djzngs8yj')

    axios.post('https://api.cloudinary.com/v1_1/djzngs8yj/image/upload', fd)
      .then((result) => {
        toast.success('file upload successfully');
        console.log(result.data);
        setPreview(result.data.url);
        // productForm.setFieldValue('image', result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('failed to upload file');

      });
  }

  return (
    <div className="max-w-lg mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Add New Product</h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-5 grid gap-y-4">
          {['name', 'price', 'description', 'category', 'color'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm mb-2 dark:text-white capitalize">
                {field}
              </label>
              {field === 'description' ? (
                <textarea
                  id={field}
                  rows="4"
                  onChange={formik.handleChange}
                  value={formik.values[field]}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                />
              ) : (
                <input
                  type={field === 'price' ? 'number' : 'text'}
                  id={field}
                  onChange={formik.handleChange}
                  value={formik.values[field]}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                />
              )}
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-xs text-red-600 mt-2">{formik.errors[field]}</p>
              )}
            </div>
          ))}

          <div className='flex justify-center items-center '>
            <label className='block rounded-lg text-2xl border-2 border-dashed p-5 mt-5 cursor-pointer w-1/2 text-blue-500' htmlFor="upload">click here to upload file</label>
            <input id='upload' type="file" onChange={upload} hidden />
            {
              preview && (
                <img className='h-6' src={preview} alt="" />
              )
            }
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
