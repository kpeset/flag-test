// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ("../styles/getTwoflags.css")


// function GetTwoFlags() {
//   const navigate = useNavigate();
//   // Faire en sorte de mettre la 404 dans un state


//   const [flag, setFlag] = useState("");
//   const [badAnswer, setBadAnswer] = useState(false);


//   const randomNb = Math.floor(Math.random() * 4);

  
//   const getFlag = async () => {
//     try {
//       const resp = await axios.get("https://restcountries.com/v3.1/all");
//       if (randomNb === 0) {
//         setFlag(resp.data[firstId]);
//       } else if (randomNb === 1) {
//         setFlag(resp.data[secondId]);
//       } else if (randomNb === 2) {
//         setFlag(resp.data[thirdId]);
//       } else {
//         setFlag(resp.data[fourthId]);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   function checkFirstAnswer() {
//     if (flag.translations.fra.common === firstCountry.translations.fra.common) {
//       voiceGood(firstCountry.translations.fra.common);
//     } else {
//       voiceNotGood(
//         firstCountry.translations.fra.common,
//         flag.translations.fra.common
//       );
//       setBadAnswer(!badAnswer);
//       navigate("/score");
//     }
//     window.location.reload();
//   }

//   function checkSecondAnswer() {
//     if (
//       flag.translations.fra.common === secondCountry.translations.fra.common
//     ) {
//       voiceGood(secondCountry.translations.fra.common);
//     } else {
//       voiceNotGood(
//         secondCountry.translations.fra.common,
//         flag.translations.fra.common
//       );
//       setBadAnswer(!badAnswer);
//       navigate("/score");
//     }
//     window.location.reload();
//   }

//   function checkThirdAnswer() {
//     if (flag.translations.fra.common === thirdCountry.translations.fra.common) {
//       voiceGood(thirdCountry.translations.fra.common);
//     } else {
//       voiceNotGood(
//         thirdCountry.translations.fra.common,
//         flag.translations.fra.common
//       );
//       setBadAnswer(!badAnswer);
//       navigate("/score");
//     }
//     window.location.reload();
//   }

//   function checkFourthAnswer() {
//     if (
//       flag.translations.fra.common === fourthCountry.translations.fra.common
//     ) {
//       voiceGood(fourthCountry.translations.fra.common);
//     } else {
//       voiceNotGood(
//         fourthCountry.translations.fra.common,
//         flag.translations.fra.common
//       );
//       setBadAnswer(!badAnswer);
//       navigate("/score");
//     }
//     window.location.reload();
//   }

//   useEffect(() => {
//     getCountries();
//     getFlag();
//   }, []);

//   function voiceNotGood(badCountry, goodCountry) {
//     const msg = new SpeechSynthesisUtterance(
//       `Faux ! Ce n'est pas ${badCountry}.  La bonne réponse est ${goodCountry}`
//     );
//     window.speechSynthesis.speak(msg);
//   }

//   function voiceGood(country) {
//     const msg = new SpeechSynthesisUtterance(
//       `Bonne réponse. C'est bien ${country}}`
//     );
//     window.speechSynthesis.speak(msg);
//   }

//   return (
//     <div className="card">
//       <div className="question">
//         <h1>A quel pays appartient ce drapeau ?</h1>
//       </div>
//       <div className="proposition">
//         <div className="center-flag">
//           {flag === "" ? (
//             "chargement"
//           ) : (
//             <img alt="Vilain tricheur" src={flag.flags.svg} />
//           )}
//         </div>
//         <div className="button">
//           <button onClick={checkFirstAnswer}>
//             {firstCountry === ""
//               ? "chargement"
//               : firstCountry.translations.fra.common}
//           </button>
//           <button onClick={checkSecondAnswer}>
//             {secondCountry === ""
//               ? "chargement"
//               : secondCountry.translations.fra.common}
//           </button>
//           <button onClick={checkThirdAnswer}>
//             {thirdCountry === ""
//               ? "chargement"
//               : thirdCountry.translations.fra.common}
//           </button>
//           <button onClick={checkFourthAnswer}>
//             {fourthCountry === ""
//               ? "chargement"
//               : fourthCountry.translations.fra.common}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetTwoFlags;
