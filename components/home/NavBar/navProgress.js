import { useEffect } from "react";

const NavProgressBar = () => {
      
const updateProgressBar = () => {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress',scrollPercent);
  }
  
  useEffect(()=> {
    document.addEventListener('scroll', updateProgressBar);
  },[])

  return (
    <div id="progress-bar" className={`absolute top-0 z-[60] bg-green-600 h-[3px]`}></div>
  )
}

export default NavProgressBar