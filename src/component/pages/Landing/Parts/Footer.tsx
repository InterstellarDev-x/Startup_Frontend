

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div >
          <h2 className="text-lg font-bold font-SemiBrand mb-4 " >E-CELL, NIT AGARTALA.</h2>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-2 text-gray-400">
            <li>Ideate</li>
            <li>Innovate</li>
            <li>Incubate</li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-bold font-SemiBrand  mb-4">FOLLOW US.</h2>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-2 text-gray-400">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>X (Twitter)</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
        </div>

        
      </div>

      <div className="text-center text-gray-400 mt-12 text-sm">
        With love from <span className="font-bold text-white">E-Cell, Nit Agartala</span>
      </div>
    </div>
  )
}

export default Footer
