import React, { useState } from "react";
import { data } from "../../data";
import "./eBook.styles.css";
const EBook = () => {
  const [items, setItems] = useState(data);

  const filterMenu = (category) => {
    const updateItems = data.filter((currentItems) => {
      return currentItems.category === category;
    });

    setItems(updateItems);
  };
  return (
    <>
      <section className="eBook_section">
        <h1 className="mt-5 text-center" style={{
          margnTop:'4rem'
        }}>Read any Book!</h1>

        <div
          className="menu-tabs container"
          style={{
            marginTop: "2rem",
            marginBottom: "0px",
          }}
        >
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Computer_Science")}
          >
            Computer Science
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Social_Science")}
          >
            Social Science
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Accounts")}
          >
            Accounts
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Biology")}
          >
            Biology
          </button>
          <button
            className="btn btn-outline-dark eBook_button"
            onClick={() => filterMenu("Psychology")}
          >
            Psychology
          </button>
        </div>
        <div className="menu-items container-fluid mt-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {items.map((elem) => {
                  const { id, name, image, review } = elem;
                  return (
                    <div
                      className="Item1 col-12 col-md-6 col-lg-6 vol-xl-4 my-5"
                      key={id}
                    >
                      <div className="row Item-inside">
                        {/*only for image */}
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                          <img
                            src={image}
                            alt="menu-img"
                            className="image-fluid"
                          />
                        </div>
                        {/*only the rest of the data */}
                        <div className="col-12 col-md-12 col-lg-8">
                          <div className="main-title pt-4 pb-3">
                            <h4 className="eBook_h4">{name}</h4>
                            <p>Review : {review}/5</p>
                            {/* <p>{description}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EBook;
