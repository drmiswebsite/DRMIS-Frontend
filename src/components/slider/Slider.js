import { useState, useEffect } from 'react';

import './Slider.scss';

import yellowArrowRight from '../../icons/yellow-arrow-right.svg';
import blueArrowRight from '../../icons/blue-arrow-right.svg';
import blackEye from '../../icons/black-eye.svg';

function Slider(props) {
  const { title, dataArr, type } = props;

  const [categoryArr, setCategoryArr] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [categorizedDataArr, setCategorizedDataArr] = useState([]);
  const [showingDataArr, setShowingDataArr] = useState([]);
  const [hasMore, setHasMore] = useState();
  const [startingIndex, setStartingIndex] = useState(0);

  useEffect(() => {
    setCategoryArr(Array.from(new Set(dataArr.map((data) => data.category_name))));
  }, [dataArr]);

  useEffect(() => {
    setCategorizedDataArr(dataArr.filter((data) => !currentCategory || data.category_name === currentCategory));
    setStartingIndex(0);
  }, [currentCategory, dataArr]);

  useEffect(() => {
    setShowingDataArr(categorizedDataArr.slice(startingIndex, startingIndex + 6));
  }, [startingIndex, categorizedDataArr]);

  useEffect(() => {
    setHasMore(categorizedDataArr.length > 6);
  }, [categorizedDataArr]);

  function categoryChangeHandler() {
    setCurrentCategory(this);
  }

  function nextClickHandler() {
    // if (showingDataArr[showingDataArr.length - 1].id === categorizedDataArr[categorizedDataArr.length - 1].id) {
    //   setStartingIndex(0);
    //   return;
    // }

    setStartingIndex((prev) => prev + 6);
  }

  function previousClickHandler() {
    // if (showingDataArr[0].id === categorizedDataArr[0].id) {
    //   setStartingIndex(categorizedDataArr.length - (categorizedDataArr.length % 6));
    //   return;
    // }

    setStartingIndex((prev) => prev - 6);
  }

  return (
    <div className="slider">
      <p className={`slider__title ${type}`}>{title}</p>
      <div className={`slider__nav ${type}`}>
        <button onClick={categoryChangeHandler} className={!currentCategory ? 'current' : ''}>
          Show All
        </button>
        {categoryArr.map((category) => (
          <button key={category} className={currentCategory === category ? 'current' : ''} onClick={categoryChangeHandler.bind(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className={`slider__body ${type}`}>
        {hasMore && (
          <button onClick={previousClickHandler}>
            <img
              className={`invert ${showingDataArr[0].id === categorizedDataArr[0].id ? 'hide' : ''}`}
              src={type === 'dark-bg' ? yellowArrowRight : blueArrowRight}
              alt=""
            ></img>
          </button>
        )}
        <div className="card-container">
          {showingDataArr.map((data) => (
            <a key={data.id} href={data.link} target="_blank" rel="noreferrer" className="card">
              <img className="card__img" src={data.img_file_path} alt=""></img>
              <div className="card__content">
                <div className="card__content--header">
                  <p className="category">
                    {data.category_name} {data.id}
                  </p>
                  <div className="view-count">
                    <img src={blackEye} alt=""></img>
                    <p>{data.view_count}</p>
                  </div>
                </div>
                <p className="card__content--title">{data.title}</p>
                <div className="card__content--footer">
                  <img src={data.author_img_file_path} alt=""></img>
                  <p>{data.author_name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {hasMore && (
          <button onClick={nextClickHandler}>
            <img
              className={`${
                showingDataArr[showingDataArr.length - 1].id === categorizedDataArr[categorizedDataArr.length - 1].id ? 'hide' : ''
              }`}
              src={type === 'dark-bg' ? yellowArrowRight : blueArrowRight}
              alt=""
            ></img>
          </button>
        )}
      </div>
    </div>
  );
}

export default Slider;
