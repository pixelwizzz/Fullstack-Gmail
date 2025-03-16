import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEmails, addEmail, starEmail } from '../../store/slices/emailSlice'
import { FaRegStar, FaStar } from 'react-icons/fa'

const Primary = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails.primary);
  const starredEmails = useSelector((state) => state.email.emails.starred);
  const loading = useSelector((state) => state.email.loading);

  // Simulate fetching emails
  useEffect(() => {
    // Sample email data
    const sampleEmails = [
      {
        id: '1',
        from: 'manish.behera14@gmail.com',
        subject: 'Welcome to Gmail ',
        body: 'This is a test email',
        timestamp: new Date().toISOString(),
      },
      {
        id: '2',
        from: 'abhinandansuhrud@gmail.com',
        subject: 'Meeting Tomorrow',
        body: 'Let\'s discuss the project',
        timestamp: new Date().toISOString(),
      }
    ];

    dispatch(setEmails({ category: 'primary', emails: sampleEmails }));
  }, [dispatch]);

  const handleAddEmail = () => {
    const newEmail = {
      id: Date.now().toString(),
      from: 'new@example.com',
      subject: 'New Test Email',
      body: 'This is a new test email',
      timestamp: new Date().toISOString(),
    };

    dispatch(addEmail({ category: 'primary', email: newEmail }));
  };

  const handleStarEmail = (emailId) => {
    const isCurrentlyStarred = starredEmails.some(email => email.id === emailId);
    dispatch(starEmail({ emailId, isStarred: !isCurrentlyStarred }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-medium text-gray-800'>Primary Inbox</h2>
        <button 
          onClick={handleAddEmail}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Add Test Email
        </button>
      </div>

      <div className='space-y-2'>
        {emails.map((email) => (
          <div 
            key={email.id} 
            className='border rounded-lg p-3 hover:shadow-md cursor-pointer'
          >
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <button 
                  onClick={() => handleStarEmail(email.id)}
                  className='text-gray-400 hover:text-yellow-400'
                >
                  {starredEmails.some(e => e.id === email.id) ? (
                    <FaStar className='text-yellow-400' />
                  ) : (
                    <FaRegStar />
                  )}
                </button>
                <span className='font-medium'>{email.from}</span>
              </div>
              <span className='text-sm text-gray-500'>
                {new Date(email.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <div className='text-gray-800 ml-7'>{email.subject}</div>
            <div className='text-sm text-gray-500 truncate ml-7'>{email.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Primary 