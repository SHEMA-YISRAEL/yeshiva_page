// import { PropsWithChildren, useEffect, useState } from "react";

// export default function PageReveal({ children }: PropsWithChildren<{}>) {
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 30) setHidden(true);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* Overlay con imagen o gif */}
//       <div
//         className={`
//           fixed inset-0 z-40 transition-opacity duration-700 pointer-events-none
//           ${hidden ? "opacity-0" : "opacity-100"}
//         `}
//         style={{
//           backgroundImage: "url('test1.jpg')", 
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat"
//         }}
//       />
//       <main className="relative z-10">{children}</main>
//     </>
//   );
// }
