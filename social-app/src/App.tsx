import './App.css';
import WalletConnect from './ConnectWallet';
import SocialUIKit from './SocialUIKit';

function App() {
  const userId = localStorage.getItem('userId');

  return (
    <div className="App">
      {!userId ? (
        <WalletConnect onConnected={(address) => {
          localStorage.setItem('userId', address)
        }} />
      ): (
        <SocialUIKit userId={userId}/>
      )}
    </div>
  );
}

export default App;
