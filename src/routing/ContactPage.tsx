import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/');
      }}
    >
      <button>Submit</button>
    </form>
  );
};

export default ContactPage;
