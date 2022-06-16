import React, {useEffect} from 'react'



function Footer() {
  useEffect(() => {
    const topBtn = document.querySelector(".top-btn");
    console.log(window.scrollY)
    topBtn.addEventListener("click", () => {
     window.scrollTo(0,0)
    })

    window.onscroll = () => {
      if (window.scrollY < 500) {
        topBtn.style.display="none"
      } else {
        topBtn.style.display="block"
      }
    }
  })
  return (
    <div className="bg-zinc-500 top-btn left-0 right-0 bottom-0 text-white mt-8 text-center">
      <div className="top fixed bottom-[2em] right-[20px] w-[50px] h-[50px] rounded-[50%] bg-orange-500 text-center  justify-center items-center flex cursor-pointer">
        Top
      </div>
        <p className="py-10">Made in 2022 by &copy;Edrick powered by cocktailTB</p>  
    </div>
  )
}

export default Footer