
export default function Header(){
    return (
        <>
          <header>
            <nav>
              <img src="#" alt="logo" />
              <div className="link-elem">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#article">Article</a>
                </div>
              <div>
                <input type="text"placeholder="User-Name"/>
                <input type="password" placeholder="password" />
                <button>Login</button>
              </div>
            </nav>
          </header>
        </>
    )
}