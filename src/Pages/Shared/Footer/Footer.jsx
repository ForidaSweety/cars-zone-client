

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
  <span className="text-5xl text-orange-700 font-extrabold">CarsZone</span>
    <p>We are committed to <br /> bring joy to the world of automotive <br />  play with our innovative and captivating toy cars.</p>
  </div> 
  <div>
    <span className="footer-title">Links</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">All Toy</a> 
    <a className="link link-hover">Blogs</a>
  </div> 
  <div>
    <span className="footer-title">Subscribe us</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="E-mail" className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-orange-700 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;