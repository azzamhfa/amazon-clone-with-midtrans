import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={Math.floor(Math.random() * 100000)}
          title="The Lean Start Up Book By Someone Who Writes it"
          price={40000}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id={Math.floor(Math.random() * 100000)}
          title="ORICO Portable HDD Enclosure 2.5-Inch SATA3 SSD HDD USB3.0 - 2521U3"
          price={50000}
          image="https://ecs7.tokopedia.net/img/cache/900/product-1/2020/8/28/565809/565809_6dff6313-5b30-4b20-9d8b-9991fdd3e3c9_800_800"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id={Math.floor(Math.random() * 100000)}
          title="SanDisk Ultra MicroSD 32GB A1 microSDHC UHS-I micro sd - No Adapter"
          price={24000}
          image="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/10/20/520f47c4-e5fd-457a-9827-760a11e2c1cf.jpg"
          rating={5}
        />
        <Product
          id={Math.floor(Math.random() * 100000)}
          title="Masker 3Ply 3 Ply Grade Medical Bedah Medis Surgical Mask Earloop"
          price={12000}
          image="https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/12/22/ce40e8df-a6fa-41f7-babc-e30f782a20ab.jpg"
          rating={4}
        />
        <Product
          id={Math.floor(Math.random() * 100000)}
          title="Teman Kayak Anjing Beli Rokok Selalu Eceran."
          price={23000}
          image="https://ecs7.tokopedia.net/img/cache/900/product-1/2020/7/5/9025449/9025449_9d8762ee-48d8-44a4-9a14-82328ab93dd7_480_480.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id={Math.floor(Math.random() * 100000)}
          title="Kikkoman Saus Manis Halal Japanese Rice Vinegar Seasoning Sauce"
          price={41000}
          image="https://ecs7.tokopedia.net/img/cache/900/product-1/2020/7/6/101596605/101596605_2d486fce-864a-4e5f-83dc-126ffd4d9f12_1000_1000"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
