import './About.css'

function Carousel() {
  return (
    <>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src="../images/abo1.jpg" className="d-block w-100 c-img" alt="Slide 1" />
          <div className='carousel-caption top-0 me-0'>
          
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="../images/abo2.jpg" className="d-block w-100 c-img" alt="Slide 2" />
           <div className='carousel-caption top-0'>
          
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="../images/abo3.jpg" className="d-block w-100 c-img" alt="Slide 3" />
           <div className='carousel-caption top-0'>
           
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   <div className="container mt-5">
      <div className="abotitle">
        <h1 className='text-center mb-5'>𝑶𝒖𝒓 𝑨𝒃𝒐𝒖𝒕</h1>
      </div>
      
        <div className="abo">
          <div className="abopara">
          <p className='mt-3 text-right'> In recusandae impedit, delectus consequuntur ipsam adipisci officiis autem nobis, deserunt architecto quaerat assumenda laboriosam. Mollitia quae cum aspernatur similique officia quod iure placeat, doloribus tempore ratione provident? Necessitatibus facere excepturi dignissimos esse ex incidunt itaque ipsa tempore. Nam facere est amet inventore ipsam dicta similique molestias possimus repudiandae exercitationem? Voluptatem illum obcaecati placeat, distinctio nemo perferendis vero quas provident? Minus aspernatur tempora error vel facilis sunt laboriosam laudantium incidunt, rem cumque distinctio repellendus rerum dolores nemo iusto molestiae reprehenderit perferendis soluta, sed autem voluptatum libero! Quos laudantium tempora ipsa neque vero non eius fuga dicta, ipsam velit obcaecati amet magnam possimus perspiciatis facere minima aliquid provident iste cumque distinctio odio enim placeat quibusdam illo. Quisquam nobis quas repudiandae cumque dolores officia maxime quae quia voluptatem fugit harum culpa, a eius, veritatis nemo error cupiditate doloremque tempore ipsam, ipsum soluta est in.</p>
        </div>
        <div className="aboimg">
          <img src="./images/caro3.jpeg"  alt="" />
          </div>
      </div>
    </div>

    <div className="container-fluid mt-5 mb-5">
      <div className="feedimg">
        <img src="./images/help1.webp" alt="" />
        <img src="./images/help2.webp" alt="" />
        <img src="./images/help3.webp" alt="" />
        <img src="./images/help4.webp" alt="" />
      </div>
    </div>
    </>
  );
}

export default Carousel;
