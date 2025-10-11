import { html, Html } from "@elysiajs/html";
import { DatePicker } from 'antd';

function App() {
  return (
    <>
      <html>
        <head>
          <link rel="stylesheet" href="./styles.css" />
          <script src="./app.ts" type="module"></script>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <DatePicker/>
        </body>
      </html>
    </>
  );
}

export default App;
