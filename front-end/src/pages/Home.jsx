// import React from 'react'
import Navbar from "../components/Navbar"
import Booking from "../components/Booking"
import Footer from "../components/Footer"
import CopyRight from "../components/CopyRight"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Booking />
      <div className="bg-gray-200">
        <div className="w-4/5 m-auto">
          <div className="text-2xl py-8">Book Train Ticket on-HumSafar</div>
          <div className="text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore tempora minus! Rerum sed atque voluptates cum omnis maxime debitis labore fugiat. Nobis minima nisi iure tempora exercitationem voluptatum eligendi, in similique, quo facilis tempore, velit autem optio nam id. Aut nemo perspiciatis eaque, repellendus maiores ex molestias quo repudiandae similique illo, rerum voluptatum quis. Eum non molestias vero, deserunt laboriosam illum autem possimus id. Quisquam in ipsa necessitatibus consequuntur.</div>
          <div className="text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque aliquam quam dolor dolores officia deserunt? Praesentium dolorem excepturi recusandae quaerat. Facilis et rerum, hic quae officia quam culpa quis maxime esse ullam similique perspiciatis vero dolorum. Distinctio, repudiandae! Amet ipsum eligendi corrupti neque, perspiciatis aliquid, sit ut optio distinctio minus unde. Blanditiis dolorum qui illo possimus id, eos cupiditate? Neque, cum veniam earum soluta ratione tempora esse, error, rem aperiam magnam nihil amet quas sapiente exercitationem similique consectetur excepturi!</div>
          <div className="text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit provident, quod debitis laudantium consectetur veritatis voluptatum! Tenetur necessitatibus accusamus expedita assumenda accusantium, deleniti mollitia sapiente dignissimos culpa corporis maxime quae doloribus, aliquam.</div>
        </div>
      </div>
      <Footer />
      <CopyRight />
    </div>
  )
}

export default Home
