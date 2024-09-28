// import React, { useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css"; // Optional: Import default styles
// import SubDonation from "./SubDonation";

// // ModalContent Component
// const ModalContent: React.FC<{ close: () => void }> = ({ close }) => {
//   return (
//     <div className="modal h-screen">
//       <SubDonation />
//     </div>
//   );
// };

// // ModalExample Component
// const ModalExample: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div>
//       <button className="button" onClick={openModal}>
//         Open Modal
//       </button>
//       <Popup open={isOpen} onClose={closeModal} modal nested>
//         <ModalContent close={closeModal} />
//       </Popup>
//     </div>
//   );
// };

// export default ModalExample;
