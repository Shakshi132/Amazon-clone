import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from "./images/banner.svg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={banner}></img>

        <div className="home_row">
          <Product
            id="67463489"
            title="SHELBERT, Bright Yellow, Wooden Chest of Drawers"
            price={20.0}
            rating={5}
            image="https://static1.businessinsider.com/image/57e567b3b0ef977f298b78e9-1200/4-the-kallax-shelving-series-became-an-instant-classic.jpg"
          />
          <Product
            id="44543545"
            title="Earthy Wooden Laid Back Chair, Printed"
            price={39.98}
            rating={3}
            image="https://tse1.mm.bing.net/th?id=OIP.wCuehkioQJEcedb397CejwHaEK&pid=Api&P=0&w=293&h=166"
          />
        </div>

        <div className="home_row">
          <Product
            id="45436547"
            title="ELITE Matte Black, Metallic Standing Side Table"
            price={45.9}
            rating={5}
            image="https://tse4.mm.bing.net/th?id=OIP.EsYTLocvQb2x4A6uLuR-2AHaHa&pid=Api&P=0&w=300&h=300"
          />

          <Product
            id="3232424"
            title="INDIE, Rose Gold Hanging Lamp"
            price={56.6}
            rating={4}
            image="https://tse2.mm.bing.net/th?id=OIP.jfY7YviRzveczywyOzzTxgHaHa&pid=Api&P=0&w=300&h=300"
          />

          <Product
            id="97867667"
            title="EFFIMATE, Cotton Midi Dress, Navy Blue, SIZE-s"
            price={75.0}
            rating={3}
            image="https://tse1.mm.bing.net/th?id=OIP.NZbPeS7nHQuGctFrRpnCSwAAAA&pid=Api&P=0&w=300&h=300"
          />
        </div>

        <div className="home_row">
          <Product
            id="82624111"
            title="Got Urbanic, Men's Cap, Black, Adjustable"
            price={59.0}
            rating={5}
            image="https://tse4.mm.bing.net/th?id=OIP.qkDQ0oguSk-AVqK0m3gcNAHaHa&pid=Api&P=0&w=300&h=300"
          />
        </div>

        <div className="home_row">
          <Product
            id="67463489"
            title="CREATIVE, 2022 Custom Calender, Recycled paper"
            price={5.0}
            rating={5}
            image="https://tse4.mm.bing.net/th?id=OIP.aDUh-JM6uwDkzeY4Q-Sy9gHaHa&pid=Api&P=0&w=300&h=300"
          />
          <Product
            id="44543545"
            title="Men's Zip Ribbed Shirt, Grey, Full Sleeves"
            price={69.98}
            rating={3}
            image="https://tse3.mm.bing.net/th?id=OIP.J6gUKl80iqy5Ip4yBy2CDgHaHa&pid=Api&P=0&w=300&h=300"
          />
        </div>

        <div className="home_row">
          <Product
            id="67463489"
            title="SLEEK, Men Watch, Leather Bands, Black"
            price={200.0}
            rating={5}
            image="https://tse2.mm.bing.net/th?id=OIP.M47POmzwhvIxASY4RNZIfgHaHa&pid=Api&P=0&w=300&h=300"
          />
          <Product
            id="44543545"
            title="Black Casual T-SHIRT, Cotton Blend, SIZE-M"
            price={15.98}
            rating={3}
            image="https://i.pinimg.com/originals/bd/10/31/bd10316ce066ab727662dfc2ff3ce452.jpg"
          />
          <Product
            id="44543545"
            title="SUMMER, Heavy Sole Shoes, Orange-Yellow, SIZE-38"
            price={98.7}
            rating={4}
            image="https://tse4.mm.bing.net/th?id=OIP.B5FVLW9BTN6mJDMy4simpgHaFj&pid=Api&P=0&w=223&h=168"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
