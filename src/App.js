import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }

  // async랑 await은 짝꿍
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">'Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default App;

//---------------------------------
// constructor(props) {
//   super(props);
//   console.log("Hello");
// }

// state = {
//   count: 0,
// };

// add = () => {
//   this.setState((current) => ({
//     count: current.count + 1,
//   }));
// };

// minus = () => {
//   this.setState((current) => ({
//     count: current.count - 1,
//   }));
// };

// // 화면에 랜더 되었을 때
// componentDidMount() {
//   console.log("component rendered");
// }

// // 객체가 업데이트 되었을 때
// componentDidUpdate() {
//   console.log("I just Updated");
// }

// // 홈페이지가 닫힐때
// componentWillUnmount() {
//   console.log("Goodbye, curel world");
// }

// render() {
//   console.log("render");
//   return (
//     <div>
//       <h1>The number is: {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//   );
// }
//---------------------------------

// -----------------------------------------------
// import PropTypes from "prop-types";

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h3>I love {name}</h3>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// const foodLike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "https://i.namu.wiki/i/VHpjq-zYFV-ZjthJlhftI5OL8XlgeXSpoSO7vGSO0PsJGPo69wTGVpbFceX96yuMcXRnZKjbwbtdCL-ylKUkkAtKFZkB1uydrLqgSLizuvwxTqRoSwBBZ1EVlsuD4AiG3HtkUSDDYo0y01YcpGIhQA.webp",
//     rating: 2.5,
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://i.namu.wiki/i/uY5SWPUv5Se3MUeHaTnPkWeAwyDghIV6uZLPAsEcbLTMeDQVlESfHUqqrkYxYAen7uR9DdzzfcZxs_P9PJBGFMaXI8ex5IgR5DBp8CETnqQoA6oLRLDIByRgaNrDxzoBFmZ8MiKGIJxWkEBpqhsvpQ.webp",
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "https://i.namu.wiki/i/C5_9p3_Wyn9JPs2VkQtZJpqJRhkiuuRXKL8HAwjrYw_vEd3_JG5YKyDA5v_YHn1A8yFGt2pK3F22SJuMF4CzoxtL_neeIRoRyglrRWwxKwp7W2J5hUiBy74SuRvwIj2s9I1db___fVKdxtcQfgj-8Q.jpg",
//     rating: 4,
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://i.namu.wiki/i/H26VUpYzDOjiqPfTOGCFW3yHKoBlGGDvMM9elVNv-4_PcmibamMFT6eiiCrxeFYtHRqJ_nNEnmv8T25a7l2udZkjGGGhgEqIalXCG6n_puVZ-nAIVazDK_WNKYYUajDTMSBbg1cYNJXbo-AVUljmYA.webp",
//     rating: 3.5,
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "https://i.namu.wiki/i/8w5dGPqUgSYNTQIzIzTF_mNBb43SGJqC0w3gFBTfggTDQzRcYyMwdTEubb0LIJPMF2n_ZgAhMLfroIo4403jn0cspt2J4EWu-0XJn2lFV79h4WVjQzROqG37qtdyD1YHGWUkAyIimjwIcSX9qs8mcg.webp",
//     rating: 3,
//   },
// ];

// function renderFood(dish) {
//   return (
//     <Food
//       key={dish.id}
//       name={dish.name}
//       picture={dish.image}
//       rating={dish.rating}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       {foodLike.map(renderFood)}
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };
// -----------------------------------------------
