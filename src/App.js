import './App.css';
import Fade from 'react-reveal/Fade';
import Banner from './components/Banner';
import Title from './components/Title';
import Profilepic from './components/Profilepic';
import Paragraph from './components/Paragraph';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Button from './components/Button';
import Footer from './components/Footer';

const Resume_URL = 'http://localhost:3000/Resume.docx'

function App() {


  const handleDownload = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className='container'>
      <Fade  top distance='20%' duration={1500}>
      <Banner />
      <Title name='Ghassan Hasan' />
      <Profilepic />
      <Paragraph />
      <Title name='Projects'/>
      <Projects />
      <Title name='Contact Me'/>
      <Contact />
      <Button buttontext='Download Resume' onClick={() => {handleDownload(Resume_URL)}}/>
      <Footer />
      </Fade>
    </div>
  );
}

export default App;
