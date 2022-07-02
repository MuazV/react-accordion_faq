import data from './components/data.js'
import './App.css';
import Faq from './components/Faq.js'


function App() {

 
  return (
    <div className="App">
    <section className="Faq">
      <h1>FAQ</h1>
      <p>An e-book is an electronic version of a traditional print book that can be read by using a personal computer or an e-book reader. When you think about it, it actually means that you can have all your favorite books stored in your pocket and you can read what you want, depending on your mood. So, in addition, we wrote down some questions that are commonly asked in the e-book community</p>
    </section>
    <main className="container">
      {data.map((item) => <Faq key={item.id} {...item} />
      )}
    </main>
    </div>
  );
}

export default App;
