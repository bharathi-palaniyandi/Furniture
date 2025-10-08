import './Home.css'

function Carousel() {
  return (
    <>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src="../images/caro1.jpeg" className="d-block w-100 c-img" alt="Slide 1" />
        </div>
        <div className="carousel-item c-item">
          <img src="../images/caro2.jpeg" className="d-block w-100 c-img" alt="Slide 2" />
        </div>
        <div className="carousel-item c-item">
          <img src="../images/caro3.jpeg" className="d-block w-100 c-img" alt="Slide 3" />
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
        <h1 className='text-center mb-5'>Buy Furniture Online at Wooden Street- India's One-Stop Solution for All Your Needs</h1>
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

    <div className="container mt-4  justify-content-center">
      <div>
        <h1 className='text-capitalize text-center'>our organic product</h1>
      </div>
      <div className="row mt-5 mb-5 ">
        <div className="col-12 col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: '22rem'  }}>
      <img src="./images/card1.webp " className="card-img-top h-25" alt="..." />
      <div className="card-body">
        <h5 className="card-title">single Seater Sofa </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-danger">Go somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-12 col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: '22rem'  }}>
      <img src="./images/card2.webp " className="card-img-top h-25" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> Metal Cluster Hanging Light</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-danger">Go somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-12 col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: '22rem'  }}>
      <img src="./images/card3.webp " className="card-img-top h-25" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> Motorized Recliner With Storage</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-danger">Go somewhere</a>
      </div>
    </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <marquee behavior="" direction=""><img src="./images/caro1.jpeg" alt=""/> <img src="./images/caro2.jpeg"/> <img src="./images/caro3.jpeg"/></marquee>
    </div>

    <div className="container mt-5">
      <div className="expre">
        <div className="expree11">
          <img src="./images/ho1.svg" alt="" />
          <div className="expar">
            <p className='mt-4'>100+</p>
            <span>Experience Stores Across India</span>
          </div>
        </div>
        <div className="expree11">
          <img src="./images/ho2.svg" alt="" />
          <div className="expar">
            <p className='mt-4'>350+</p>
            <span>Delivery Centers Across India</span>
          </div>
        </div>
        <div className="expree11">
          <img src="./images/ho3.svg" alt="" />
          <div className="expar">
            <p className='mt-4'>10 Lakh +</p>
            <span>Satisfied Customers</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <h1 className='text-center mb-4 '>Our Customers Reviw</h1>
      <div className="reviw ">
        <img src="./images/revi3.webp" className='img-fluid ' alt="" />
        <img src="./images/revi4.webp" className='img-fluid ' alt="" />
      </div>
    </div>
    </>
  );
}

export default Carousel;
