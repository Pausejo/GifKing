import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GifExpertApp } from './GifExpertApp';
import './index.scss';

const divRoot = document.getElementById("root");

const root = ReactDOM.createRoot(divRoot);

root.render(<GifExpertApp />);

// ReactDOM.render(
//     <GifExpertApp />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();