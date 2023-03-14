import React from "react";
const image =
  "https://www.bigbasket.com/media/uploads/p/xxl/266070_11-nestle-milkmaid-sweetened-condensed-milk.jpg";
const image1 =
  "https://www.mynestle.in/media/catalog/product/1/2/12_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600";
const image2 =
  "https://www.bigbasket.com/media/uploads/p/xxl/266070_11-nestle-milkmaid-sweetened-condensed-milk.jpg";
const image3 =
  "https://www.jiomart.com/images/product/600x600/490001537/nestle-milkmaid-condensed-milk-380-g-tin-product-images-o490001537-p490001537-2-202211151711.jpg";
const image4 =
  "https://www.bigbasket.com/media/uploads/p/xxl/266070-4_11-nestle-milkmaid-sweetened-condensed-milk.jpg";
const image5 =
  "https://dineshsupermarket.in/uploads/media/2022/nestle-milkmaid-condensed-milk-400-gm-tin-0-20200518-247x296.jpg";
export const DetailOfProduct = () => {
  return (
    <div>
      <img id="Image" src={image} alt="dfdf" width={400} />
      <h4 className="my-3">Nested Milkmaid</h4>
      <div className="row justify-content-around text-center justify-content-center">
        <div
          onClick={() => (document.getElementById("Image").src = image1)}
          className="col-2 border"
        >
          <img src={image1} alt="sd" width={90} />
          Packing
        </div>
        <div
          onClick={() => (document.getElementById("Image").src = image2)}
          className="col-2 border"
        >
          <img src={image2} alt="df" width={90} />
          Product
        </div>
        <div
          onClick={() => (document.getElementById("Image").src = image3)}
          className="col-2 border"
        >
          <img src={image3} alt="dg" width={90} />
          Details
        </div>
        <div
          onClick={() => (document.getElementById("Image").src = image4)}
          className="col-2 border"
        >
          <img src={image4} alt="fd" width={90} />
          Nutritions
        </div>
        <div
          onClick={() => (document.getElementById("Image").src = image5)}
          className="col-2 border"
        >
          <img src={image5} alt="sf" width={70} />
          Another
        </div>
      </div>
      <div className="div text-start">
        <h5 className="py-3">Product Details</h5>
        <b>Key Features</b>
        <p>
          Made using trusted kitchen ingredients Packed with fiery flavours of
          exotic Indian spices Crispy snack with a satisfying crunch A
          tasty-spicy nosh perfect to satiate hunger pangs
        </p>
        <b>Ingredients</b>
        <p>
          Rice Meal, Edible Vegetable Oil, Corn Meal, Gram Meal, Spices &
          Condiments (Onion Powder, Chilli Powder, Coriander Seed Powder, Amchur
          Powder, Garlic Powder, Ginger Powder, Black Pepper Powder, Turmeric
          Powder, Spices Extract, Fenugreek Leaf Powder), Salt, Sugar, Black
          Salt, Tomato Powder, Citric Acid, Tartaric Acid, Dextrose, Milk Solids
        </p>
        <b>Unit</b>
        <p>82gm</p>
        <b>Shelf Life</b>
        <p>4 months</p>
        <b>Manufacturer Details</b>
        <p>
          N1 PepsiCo India Holdings Pvt. Ltd. Village channo, Patiala Sangrur
          Road, P.O. Bhawanigarh, Distt. Sangrur 148026, Punjab. N2 PepsiCo
          India Holdings Pvt. Ltd., C-5, MIDC, Ranjangaon, taluka Shirur, Pune
          412220, Maharashtra. N3 PepsiCo India Holidngs PVt. Ltd., JL No. 2&4
          (kendua Panchayat), Mouja Jaladhulagori via Andul Mouri, P.O
          Dhulagarh, P.S Sankrail, District Howrah 711302, West Bengal. KS
          Kishlay snacks products, NH-37, Sarusajai, Lokhra Charali, Guwahati
          781034, ASSAM. DF Daawat Foods ltd. 45km. Stone, GT road, Kamaspur,
          Distt. Sonepat- 131021, Haryana. HB Heemakshi Bakers pvt. Ltd., Sy.No:
          J.p Darga road, Mekaguda village Nandigama mandal, Distt. Ranga reddy
          509228, Telangana. AB AFP Manufacturing co. pvt. Ltd., B5 & A2,
          E.P.I.P Hajipur industrial Area, Hajipur, Distt. Vaishali 844101,
          Bihar. JD M/S JDB Steel, Industrial Growth centre, Chatabari ,
          Chaygaon, Distt. Kamrup 781123, Assam.
        </p>
      </div>
    </div>
  );
};
