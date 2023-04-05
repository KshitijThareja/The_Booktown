// // import React, { useState, useEffect } from 'react';
// import styles from "Home.module.css";


// // function Home() {
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     fetch('http://localhost:8000/api/hello/')
// //       .then(res => {
        
// //         if (!res.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return res.json();
// //       })
// //       .then(data => setMessage(data.message))
// //       .catch(error => {
      
// //         setMessage('An error occurred while fetching the data.');
// //       });
// //   }, []);

// // import styles from './Home.module.css';
import styles from '../styles/Home.module.css'; 
// // import React, { useState, useEffect } from 'react';
// const MacBookPro141 = () => {
//   return (
//     <div className={ styles.macbookPro141}>
//       <div className={styles.accountButton}>
//         <div className={styles.signUp}>Sign up</div>
//         <div className={styles.accountButtonChild} />
//       </div>
//       <div className={styles.cartBtn}>
//         <div className={styles.cartBtnChild} />
//         <div className={styles.logIn}>Log in</div>
//       </div>
//       <p className={styles.heroTitle}>
        
//       A world of books at your fingertips.
//       Welcome to our website, where you can give your gently used books a new life and help spread the joy of reading to others.
//       </p>
//       <img
//         className={styles.b8163268619025e9e0b33c10b50485Icon}
//         alt=""
//         src="/b8163268619025e9e0b33c10b504850b-1@2x.png"
//       />
//       <div className={styles.donateNowParent}>
//         <div className={styles.donateNow}>Donate Now</div>
//         <img
//           className={styles.keyboardArrowDown}
//           alt=""
//           src="/keyboard-arrow-down.svg"
//         />
//       </div>
//       <div className={styles.readMoreParent}>
//         <div className={styles.donateNow}>Read More</div>
//         <img
//           className={styles.keyboardArrowDown}
//           alt=""
//           src="/keyboard-arrow-down1.svg"
//         />
//       </div>
//       <img className={styles.macbookPro141Child} alt="" />
//       <img
//         className={styles.yourPlaceToReadRemovebgPrIcon}
//         alt=""
//         src="/your-place-to-readremovebgpreview-1@2x.png"
//       />
//       <div className={styles.aboutUs}>ABOUT US</div>
//       <div className={styles.macbookPro141Item} />
//       <div className={styles.ourOperationalModel}>OUR OPERATIONAL MODEL</div>
//       <div className={styles.aDedicatedTeamContainer}>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>
//               A dedicated team of volunteers who want to do their bit of good
//               towards the society.
//             </span>
//           </span>
//         </p>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>
//               It all started when we wanted to donate our old books. We wanted
//               them to be of good use to someone, someone who really needs it.
//               And thus popped the idea of collecting books and giving it to the
//               needy.
//             </span>
//           </span>
//         </p>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>
//               We realised there are many kids who aren’t so privileged and can’t
//               afford to purchase even the textbooks. This thought made us work
//               passionately towards this cause and we started this journey to
//               make sure that the extra books lying on your shelves reach those
//               who cant afford them.
//             </span>
//           </span>
//         </p>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>
//               We know the value of books. Books give exposure to children. They
//               open a whole new world for them to dive in.
//             </span>
//           </span>
//         </p>
//         <p className={styles.blankLine}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>&nbsp;</span>
//           </span>
//         </p>
//         <p className={styles.ourMottoHarHaathKitaab}>
//           <span>
//             <span className={styles.ourMottoHar}>
//               Our motto: Har haath kitaab
//             </span>
//           </span>
//         </p>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span>
//             <span className={styles.ourMottoHar}>&nbsp;</span>
//           </span>
//         </p>
//         <ul className={styles.toBeAccessibleToEveryIndi}>
//           <li className={styles.toBeAccessibleToEveryIndi1}>
//             <span className={styles.aDedicatedTeamOfVolunteers1}>
//               <span>To be accessible to every individual who needs books.</span>
//             </span>
//           </li>
//         </ul>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>&nbsp;</span>
//           </span>
//         </p>
//         <ul className={styles.toBeAccessibleToEveryIndi}>
//           <li className={styles.toBeAccessibleToEveryIndi1}>
//             <span className={styles.aDedicatedTeamOfVolunteers1}>
//               <span>
//                 To collect books from as many people as possible and give them a
//                 chance to be a part of this initiative.
//               </span>
//             </span>
//           </li>
//         </ul>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>&nbsp;</span>
//           </span>
//         </p>
//         <ul className={styles.toBeAccessibleToEveryIndi}>
//           <li className={styles.toBeAccessibleToEveryIndi1}>
//             <span className={styles.aDedicatedTeamOfVolunteers1}>
//               <span>
//                 To make people aware how important and valuable is their
//                 contribution towards the society.
//               </span>
//             </span>
//           </li>
//         </ul>
//         <p className={styles.aDedicatedTeamOfVolunteers}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>&nbsp;</span>
//           </span>
//         </p>
//         <ul className={styles.toBeAccessibleToEveryIndi}>
//           <li className={styles.toBeAccessibleToEveryIndi1}>
//             <span className={styles.aDedicatedTeamOfVolunteers1}>
//               <span>
//                 Since it is a donation (monetary) free NGO, we aim to encourage
//                 people to lend a helping hand to the needy.
//               </span>
//             </span>
//           </li>
//         </ul>
//         <p className={styles.blankLine}>
//           <span className={styles.aDedicatedTeamOfVolunteers1}>
//             <span>&nbsp;</span>
//           </span>
//         </p>
//       </div>
//       <img
//         className={styles.aa23d4bcA20b4f568e95Eb777eIcon}
//         alt=""
//         src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
//       />
//       <div className={styles.collection}>
//         <div className={styles.collectionChild} />
//         <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
//         <div className={styles.collectionWeCollectContainer}>
//           <p className={styles.sortingTheBooks}>Collection</p>
//           <p className={styles.weCollectUsednew}>
//             We collect used/new books from individuals, schools, corporates, etc
//             who are willing to support the cause.
//           </p>
//         </div>
//       </div>
//       <div className={styles.distribution}>
//         <div className={styles.collectionChild} />
//         <img className={styles.image1Icon} alt="" src="/image-3@2x.png" />
//         <div className={styles.collectionWeCollectContainer}>
//           <p className={styles.sortingTheBooks}>Distribution</p>
//           <p className={styles.weCollectUsednew}>
//             We distribute books via book stalls at govt. schools. We also
//             provide books to credible NGOs in education domain.
//           </p>
//         </div>
//       </div>
//       <div className={styles.sorting}>
//         <div className={styles.sortingChild} />
//         <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
//         <div className={styles.collectionWeCollectContainer}>
//           <p className={styles.sortingTheBooks}>Sorting the books</p>
//           <p className={styles.weCollectUsednew}>
//             Recycling those that are worn out/ torn/ not in good shape.
//           </p>
//         </div>
//       </div>
//       <div className={styles.wellWeAre}>
//         Well, we are just trying to make the world a better place.
//       </div>
//       <div className={styles.footerfooterArea}>
//         <div className={styles.divrow}>
//           <div className={styles.divfooterLogo}>
//             <b className={styles.aboutUs1}>About Us</b>
//             <div className={styles.thisOrganizationIs}>
//               This organization is set up by people who want to come out of
//               their comfort zone and utilize their resources for the betterment
//               of the nation.
//             </div>
//           </div>
//           <div className={styles.divfooterLinks}>
//             <b className={styles.quickLinks}>Quick links</b>
//             <div className={styles.ul}>
//               <div className={styles.li}>
//                 <div className={styles.a}>
//                   <img className={styles.frameIcon} alt="" src="/frame.svg" />
//                   <div className={styles.about}>About</div>
//                 </div>
//               </div>
//               <div className={styles.li1}>
//                 <div className={styles.a1}>
//                   <img className={styles.frameIcon} alt="" src="/frame1.svg" />
//                   <div className={styles.blog}>Blog</div>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.a2}>
//               <img className={styles.frameIcon} alt="" src="/frame2.svg" />
//               <div className={styles.donation}>Donation</div>
//             </div>
//           </div>
//           <div className={styles.divfooterContact}>
//             <b className={styles.contactInfo}>Contact info</b>
//             <div className={styles.ul1}>
//               <div className={styles.rZG554Raj}>R-Z-G 554, Raj Nagar - II,</div>
//               <div className={styles.palamColonyNew}>
//                 Palam Colony, New Delhi 10077
//               </div>
//               <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
//               <div className={styles.div}>+91 9015033662</div>
//               <img className={styles.frameIcon4} alt="" src="/frame4.svg" />
//               <div className={styles.infobooktownfoundationorg}>
//                 info@booktownfoundation.org
//               </div>
//               <img className={styles.frameIcon5} alt="" src="/frame5.svg" />
//             </div>
//           </div>
//         </div>
//         <div className={styles.divcopyrightArea} />
//         <div className={styles.p}>
//           <div className={styles.copyright2023Booktownfounda}>
//             Copyright ©2023 booktownfoundation.org. Designed By
//           </div>
//           <div className={styles.ktKs}>KT-KS</div>
//         </div>
//         <img
//           className={styles.footerfooterAreaChild}
//           alt=""
//           src="/ellipse-1.svg"
//         />
//         <img className={styles.messageIcon} alt="" src="/message.svg" />
//       </div>
//       <div className={styles.links}>
//         <div className={styles.home}>Home</div>
//         <div className={styles.about1}>About</div>
//         <div className={styles.donate}>Donate</div>
//         <div className={styles.contact}>Contact</div>
//       </div>
//     </div>
//   );
// };

// export default MacBookPro141;



// const Landingpage = () => {
//   return (
    // <div className={styles.container}>
    //   <div className={styles.navbar}>
    //     <div className={styles.navbarChild} />
    //     <div className={styles.navbarChild1} />


   






    const LandingPage = () => {
      return (
 
     
        <div className="relative bg-white w-full h-[262.81rem] overflow-hidden text-left text-[2.19rem] text-black font-roboto">
         <div className="absolute top-[4.75rem] left-[104.06rem] w-[16.25rem] h-[5.5rem] text-gray-100">
          <div className="absolute top-[1.5rem] left-[4.31rem] font-medium inline-block w-[7.63rem] h-[2.38rem]">
            Sign up
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gainsboro box-border w-[16.25rem] h-[5.5rem] border-[2px] border-solid border-gray-100" />
        </div>
        {/* <div className="absolute top-[4.75rem] left-[124.63rem] w-[16.25rem] h-[5.5rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-black w-[16.25rem] h-[5.5rem]" /> */}
          {/* <div className="absolute top-[1.5rem] left-[5rem] font-medium inline-block w-[6.25rem] h-[2rem]"> */}
          <button className="absolute top-[1.5rem] left-[5rem] font-medium inline-block w-[6.25rem] h-[2rem]"></button>
          {/* </div> */}
        
        </div>
      // </div>
      


      );
    };
    export default LandingPage;