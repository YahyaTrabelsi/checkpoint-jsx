// import logo from './logo.svg';
import './App.css';
import './Style/Style.css';
import MyImage from './MyImage.jpg';



function App() {
  return (
  <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title-red">Yahya Trabelsi</h1>
    <br />
    <img src={MyImage} className="image-edit" alt=""/>
    <img src="Image.jpg" className="image-edit" alt="" />
    <br />
    
    
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
  
  );
}

export default App;
