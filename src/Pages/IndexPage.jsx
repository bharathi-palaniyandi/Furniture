import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Index Page</h1>
      <Link to="/login">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>Go to Login</button>
      </Link>
    </div>
  );
};

export default IndexPage;
