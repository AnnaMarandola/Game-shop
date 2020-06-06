import React from "react";

export const Navbar = ({ filter, setFiltering  }) => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
    <a href="" className="navbar-brand crimson">
     <i class="fas fa-shopping-cart"></i> Ma boutique de jeux en ligne</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
            </form>
          </div>
          <div className="menu-right">
             <a href="" className="">
                <i class="fas fa-shopping-bag fa-2x grey"></i>
             </a>
              {/* <span class="badge badge-pill badge-success">{items.length > 0 && items.length}</span> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Card = props => {
  const { game } = props
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/${game.category}/${game.image}`}
          alt={game.name}        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{game.title}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                 {game.price}€ TTC</p>
              <button className="btn btn-warning btn-sm" >view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal item={item} count={count}/> */}
    </div>
  );
};

export const List = props => {
  const { data, category } = props
  const games = data[category]

  console.log('data', data)
  console.log('cardGames', games)
  return (
    <div className="col-sm">
      <div className="row">
      {games.map( game => <Card key={game.ref} game={game}/>)}
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

