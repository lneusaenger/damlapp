import './App.css';
import BookCard from './BookCard';
import { Row } from 'antd';


function App(props) {
  const bookList = props.books?.map((book) =>
    <BookCard
    id={book.title}
    title = {book.title}
    author={book.author}
    imglink={book.imglink}
    rating={book.rating}
    genre={book.genre}
    description={book.description} />
  )
  return (
    <div className="favbooks">
      <header className="App-header">
        <img src="https://media.licdn.com/dms/image/C4D03AQFenGGXnMIh2A/profile-displayphoto-shrink_400_400/0/1633881965899?e=1682553600&v=beta&t=PFuRUP3M7A5XlDk0B28VxrFqJxyvn2QB9XH8X4fscdk" className = "myFace" alt = "me" />
        <h1>
          My Favorite Books
        </h1>
      </header>
      <body className = "App-body">
      <Row style={{width: '100%', height: 1000}}>
          {bookList}
          </Row>
      </body>
    </div>
  );
}

export default App;
