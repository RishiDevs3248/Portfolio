import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

// const greetings = ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Namaste', 'こんにちは', '안녕하세요', '你好', 'Olá'];
const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'こんにちは', 'Namaste'];

function Welcome() {
  const [index, setIndex] = useState(0);
  const [animateExit, setAnimateExit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < greetings.length - 1) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 900);
      return () => clearInterval(interval);
    } else {
      // After showing all greetings
      setTimeout(() => {
        setAnimateExit(true);
      }, 1000);

      // Navigate to /home after slide-up animation
      setTimeout(() => {
        navigate('/home');
      }, 1900);
    }
  }, [index]);

  return (
    <section className={`greeting-screen ${animateExit ? 'slide-up' : ''} bg-black`}>
      <p className="greeting-text text-white font-[san] tracking-[10px]">{greetings[index]}</p>
    </section>
  );
}

export default Welcome;
