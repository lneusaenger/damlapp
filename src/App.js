import './App.css';
import axios from 'axios';
import BookCard from './BookCard';
import { Row } from 'antd';
import {Col } from 'antd';

const getBooks = async () => {
  const { data } = await axios.get('books.json');
  return data;
}



function App() {
  return (
    <div className="favbooks">
      <header className="App-header">
        <img src="https://media.licdn.com/dms/image/C4D03AQFenGGXnMIh2A/profile-displayphoto-shrink_400_400/0/1633881965899?e=1682553600&v=beta&t=PFuRUP3M7A5XlDk0B28VxrFqJxyvn2QB9XH8X4fscdk" className = "myFace" alt = "me" />
        <h1>
          Lily Neusaenger's
            Favorite Books
        </h1>
      </header>
      <body className = "App-body">
      <Row style={{width: '100%', height: 1000, alignContent: 'center'}}>
          <Col span={6}>Hello</Col>
          <Col span={6}>Hello</Col>
          <Col span={6}>Hello</Col>
          <Col span={6}>Hello</Col>
          </Row>
      </body>
    </div>
  );
}

export default App;
