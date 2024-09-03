

export default function About(props) {
  const isDarkMode = props.mode === "dark";

//   
  return (
      <div className='container'style={{ color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? 'grey' : 'white' }} >
        <div className="container my-5" >
      <h1 className="text-center mb-4" >About Us</h1>
      <div className="row" >
        <div className="col-lg-6 mb-4" >
          <div className="card" style={{ color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? 'black' : 'white' }}>
            <img src="aboutus.png" className="card-img-top" alt="Our Mission" />
            <div className="card-body" >
              <h5 className="card-title" >Our Mission</h5>
              <p className="card-text"  >
                We aim to provide the best services to our customers. Our mission is to innovate and
                deliver quality solutions that meet the needs of our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card"style={{ color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? 'black' : 'white' }}>
            <img src="aboutus.png" className="card-img-top" alt="Our Vision" />
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                Our vision is to be a leader in our industry, known for our commitment to excellence and
                our ability to adapt to the ever-changing market needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* <div className='container my-3'>
  <button onClick={toggleStyle} type="button" className="btn btn-primary"> {btnText}</button>  </div> */}
      </div>
  )
}
