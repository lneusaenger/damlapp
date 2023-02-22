import './App.css';
import BookCard from './BookCard';
import { Row } from 'antd';

function App(props) {
  const bookList = props.books?.map((book) =>
    <BookCard
    key={book.title}
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
        <h1>
        My Favorite Books
        </h1>
      </header>
      <body className = "App-body">
      <Row style={{width: '100%', height: 620}}>
      {bookList}
      </Row>
      </body>
    </div>
  );
}

export default App;
