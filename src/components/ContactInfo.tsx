import React from 'react';
import { contacts } from '@/shared/constants';

const ContactInfo = () => {
  return (
    <div className="flex justify-between pt-32 min-[320px]:w-full min-[320px]:flex-wrap min-[320px]:gap-2 min-[320px]:px-12 min-[320px]:pt-20 lg:w-11/12 lg:px-20">
      {contacts.map(({ title, value }) => (
        <div className="flex flex-col gap-1">
          <p className="font-medium">{title}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
