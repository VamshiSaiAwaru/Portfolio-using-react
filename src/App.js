import './App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import About from './components/aboutme';
import Footer from './components/footer';
import Projects from './components/projects';
import Blogs from './components/blogs';
import Technology from'./components/technology';
import Recc from './components/recc';
function App() {
  
    return( 
    <div>
        <Navbar/>
        <Title name="A.Vamshi Sai" leadtext="I am a Student from India"/>
        <Recc/>
        <Technology/>
       <Projects/>
       <About/>
        <Blogs/>
        <Footer/>

    </div>
    );
  
}

export default App;
