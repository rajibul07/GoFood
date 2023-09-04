import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" classnameName="carousel slide carousel-fade" data-bs-ride="carousel">
  <div classnameName="carousel-inner">
  <form classname="d-flex">
      <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classname="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div classnameName="carousel-item active">
      <img src=".https://source.unsplash.com/random/900x700/?burger" classnameName="d-block w-100" alt="..."/>
    </div>
    <div classnameName="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?momos" classnameName="d-block w-100" alt="..."/>
    </div>
    <div classnameName="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" classnameName="d-block w-100" alt="..."/>
    </div>
  </div>
  <button classnameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span classnameName="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classnameName="visually-hidden">Previous</span>
  </button>
  <button classnameName="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span classnameName="carousel-control-next-icon" aria-hidden="true"></span>
    <span classnameName="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
