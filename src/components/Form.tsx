'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fields } from '@/shared/constants';
import { orderSchema, TOrderSchema } from '@/shared/zod';

const Form = () => {
  const { control, handleSubmit } = useForm<TOrderSchema>({
    resolver: zodResolver(orderSchema),
  });

  const onReOrder = (data: TOrderSchema) => {
    alert(
      'You successfully pre-ordered TechWave XR \n' +
        `Your order info: ${JSON.stringify(data)}`,
    );
  };

  return (
    <div className="w-9/12 min-[320px]:mt-10 lg:mt-32">
      <div className="flex w-full flex-col items-center text-center min-[320px]:mb-10 lg:mb-14">
        <h2 className="mb-4 font-medium min-[320px]:text-2xl lg:text-4xl">
          Pre-Order Your TechWave XR Experience
        </h2>
        <p className="min-[320px]:text-md lg:text-xl">
          Secure your access to the future of digital interaction! Pre-order the
          TechWave XR Experience now and be among the first to explore immersive
          worlds where VR, AR, and MR converge.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onReOrder)}
        className="m-auto flex flex-col gap-4 min-[320px]:w-full lg:w-1/2"
        action="/"
      >
        {fields.map(({ name, placeholder, label, type }, index) => (
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
              <div key={index} className="gap flex flex-col">
                <label
                  className="min-[320px]:text-sm lg:text-base"
                  htmlFor={name}
                >
                  {label}
                </label>
                <input
                  {...field}
                  className="w-full rounded-md border border-gray-500 p-3 min-[320px]:text-sm lg:text-base"
                  id={name}
                  type={type}
                  placeholder={placeholder}
                />
                {fieldState && (
                  <p className="mt-1 text-sm text-red-600">
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
        ))}
        <button
          type="submit"
          className="w-full rounded-md border bg-gray-400 p-3 font-medium"
        >
          Pre order
        </button>
      </form>
    </div>
  );
};

export default Form;
