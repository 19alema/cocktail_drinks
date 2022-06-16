import React from 'react'
function Loader() {
    return (
        <div className="grid h-screen place-items-center w-[100vw]">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue">
                    <div className="circle-clipper left">
                        <div className="circle" />
                    </div>
                    <div className="gap-patch">
                        <div className="circle" />
                        </div><div className="circle-clipper right">
                            <div className="circle" />
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Loader