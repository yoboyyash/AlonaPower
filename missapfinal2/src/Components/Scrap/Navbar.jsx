// Import Link to route all components 

import { Link } from 'react-router-dom';

//Styles import below 



const Navbar = () => {

    
                return (

                    <nav className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 shadow-lg sm">

                        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                                <div className="flex justify-between items-center py-4">
                    
                                    <h1 className="text-6xl font-bold "> <CgNameTag/> Alona World</h1>
                            
                                        <div className='text-2xl my-12 mx-12 bg-purple-600 '>
                                            <Link className="mx-3 hover:bg-pink-500 my-6" to ="/">Home</Link>
                                            <Link className="mx-3 hover:bg-pink-500" to ="/aboutMe">About Me</Link>
                                            <Link className="mx-3 hover:bg-pink-500" to ="/projects">Camera Roll</Link>
                                            <Link className="mx-3 hover:bg-pink-500" to="/contact">Contact</Link>
                                        </div>
                                    
                                </div>      
                        </div>

                


                    </nav>
                );
};

export default Navbar; 