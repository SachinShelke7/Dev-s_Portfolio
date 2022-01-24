import React from 'react';

function alertBox() {
  alert("Under Development!");
}

const Contact = () => {
  return <div className='bg-gray-200 h-screen -mb-6'>
        <div className="w-full flex justify-center h-screen items-center">

            <div className="bg-white p-8 rounded-lg shadow-lg">
                <form action="" className="flex flex-col space-y-4">
                  <div className='flex flex-col md:flex-row md:space-x-5'>
                  <div className="">
                        <label for="">Your Name:</label><br/>
                        <input type="text" placeholder="Your Name" className="border mt-2 px-2 py-2 ring-2 ring-transparent rounded-lg hover:border-teal-400 w-[300px]" />
                    </div>
                    <div className="">
                        <label for="">Your Email:</label><br/>
                        <input type="email" placeholder="Your Email" className="border mt-2 px-2 py-2 ring-2 ring-transparent rounded-lg hover:border-teal-400 w-[300px]" />
                    </div>
                  </div>
                    
                    <div className="">
                        <label for="">Massage:</label><br/>
                        <textarea placeholder="Your Name" rows="4" className="border mt-2 px-2 py-2 ring-2 ring-transparent rounded-lg hover:border-teal-400 w-full" >
                            </textarea>
                    </div>
                    <div>
                        <button className="border border-teal-500 text-teal-500 bg-white px-1 py-1 rounded hover:border-teal-600 hover:text-white hover:bg-teal-400"
                        onClick={alertBox}
                        >Send Massage</button>
                    </div>
                    
                </form>

                </div>
            </div>
  </div>;
};

export default Contact;
