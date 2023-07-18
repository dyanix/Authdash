

export default function Layout({ children }) {
    return (

        <div className="h-screen bg-gray-50 grid grid-cols-1 lg:grid-cols-2">
        <div className="left flex flex-col justify-center items-center bg-black text-white">
          <div className="py-10">
            <h1 className="font-montserrat text-7xl font-bold leading-88 tracking-normal text-center">Board.</h1>
          </div>
        </div>
        <div className="right flex flex-col justify-evenly bg-gray-200">
          <div className="text-center py-10">
            {children}
          </div>
        </div>
      </div>
    

    )
}

