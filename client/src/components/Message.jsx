import React, { useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { useMessageMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';

const Message = () => {
  const [message, setMessage] = useState('');

  const [sendMessage, { isLoading }] = useMessageMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    try {
      await sendMessage({ message });
      toast.success('Message sent successfully');
      setMessage('');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className='p-5 pt-10 pb-0 490:p-10 490:pb-0 1100:p-20 1100:pt-10 1100:pb-0'>
      <p className='text-white text-xl text-center'>Send Message</p>
      <div>
        <form className='pt-5' onSubmit={submitHandler}>
          <div className='pt-3'>
            <label className='text-white flex items-center'>
              <BiMessageDetail className='text-lg mr-1' />
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-100% p-2 rounded-lg h-40'
              placeholder='Your message here...'
            ></textarea>
          </div>

          <div className='pt-10'>
            <button
              type='submit'
              className='bg-red-700 text-white p-10 pt-2 pb-2 rounded-lg hover:bg-red-800'
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
        <div className='pt-10 pb-5'>
          <p className='text-white text-center'>Note: Response will be sent to the email used to register the account.</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
