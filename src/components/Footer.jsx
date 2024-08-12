import Container from "./Container";

const Footer= ()=>{
    const date = new Date();
return (
  
    <footer className="mx-5 mt-auto bg-black text-white text-center py-2">
    @{date.getFullYear()} <a href="https://mms-it.com" className="underline text-gray-300">
        MMSIT 
    </a>
    . All rights reserved.
    </footer>
  

);
};
export default Footer;