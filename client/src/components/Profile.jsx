import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUserAdd } from 'react-icons/ai';

const Profile = () => {
  const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state) => state.auth);

    const [updateProfile, {isLoading}] = useUpdateUserMutation();

    useEffect(() => {
        setUserName(userInfo.username);
        setEmail(userInfo.email);
    }, [userInfo.setUserName, userInfo.setEmail]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
               const res = await updateProfile({
                _id:userInfo._id,
                username,
                email,
                password
               }).unwrap();
               dispatch(setCredentials({...res}));
               toast.success('Profile updated');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    }


  return (
    <div className='p-5 pt-10 pb-20 490:p-10 490:pb-20 1100:p-20 1100:pt-10 1100:pb-20'>
      <p className='text-white text-xl text-center'>Update Profile</p>
      <div>
        <form 
          onSubmit={submitHandler}
          className='pt-5'>

          <div>
            <label className='text-white flex items-center'><AiOutlineUserAdd className='text-lg mr-1'/>Username</label>
            <input 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className='w-100% p-2 rounded-lg'
              type='text'
              placeholder='Name123'/>
          </div>

          <div className='pt-3'>
              <label className='text-white flex items-center'><AiOutlineMail className='text-lg mr-1'/>Email Address</label>
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-100% p-2 rounded-lg'
                type='email'
                placeholder='email@email.com'/>
          </div>

          <div className='pt-3'>
              <label className='text-white flex items-center'><RiLockPasswordLine className='text-lg mr-1'/>Password</label>
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-100% p-2 rounded-lg'
                type='password'
                placeholder='Password123456!'/>
          </div>

          <div className='pt-3'>
              <label className='text-white flex items-center'><RiLockPasswordLine className='text-lg mr-1'/>Confirm Password</label>
              <input 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-100% p-2 rounded-lg'
                type='password'
                placeholder='Password123456!'/>
          </div>

          <div className='pt-10'>
            <button
                type='submit'
                className='bg-red-700 text-white p-10 pt-2 pb-2 rounded-lg hover:bg-red-800'
                disabled={isLoading}
              >
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Profile