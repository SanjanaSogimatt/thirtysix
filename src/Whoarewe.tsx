
import AnimatedText from './AnimatedText'
function Whoarewe() {
    return (
      <div className="absolute">
      <div className="relative left-0 top-0 mb-8 mx-auto px-4 border-b-2 w-full ">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 ">
              <div className='mx-12 max-w-512 max-lg:max-w-388'>
                  <h1 id="header" className="font-Italiana text-4xl font-bold">
                      How we give back
                  </h1>
              </div>
              <div className='max-w-440 mb-14 text-left break-words'>
                  <AnimatedText
                      text={"At Thirtysixstudio, we build immersive digital experiences for brands with a purpose. We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional."} />
                  <br />
                  <p >
                      Our mission is to help brands tell their story through innovative and engaging digital experiences. We believe in the power of design and technology to create meaningful connections between brands and their audiences.
                  </p>
              </div>
          </div>
            </div>
        </div>
  )
}

export default Whoarewe