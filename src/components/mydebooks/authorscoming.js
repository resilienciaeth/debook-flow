import React from "react";

const authors = [
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677340433/Fo0LrNYXgAEAQOa_iips1r.jpg",
    authorName: "Poopie",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/a279e1cc9481bb8e9649166e502ef051_uxnzrg.png",
    authorName: "Layne Lafrance",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343413/Sophia_0_vgkwfl.jpg",
    authorName: "Sophia Zhao",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343411/garrett.f4eae57b_ydq6ro.jpg",
    authorName: "Garrett Skrovina",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/d5_PMXLN_400x400_b0xj5d.jpg",
    authorName: "Bjarte Karlsen",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/amazingprofilepic_vepuh3.png",
    authorName: "Jacob Tucker",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/Luca_Basile.da39e6c3_q6ge2s.webp",
    authorName: "Luca Basile",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/nvIZnGKH_400x400_lcai9q.jpg",
    authorName: "Anuke Ganegoda",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/jadey-li_asehhj.png",
    authorName: "Jadey Li",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343413/Pocket-monkey_f2vjel.png",
    authorName: "Stefano Virgilli",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/ashley.2fc2859c_cp8sws.webp",
    authorName: "Ashley Velasquez",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343411/download_fc6cyi.jpg",
    authorName: "Lionel Fock",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/cem-arcan-7a16a642_een2oz.jpg",
    authorName: "Cem Arcan",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343411/fok.db7b097a_abprs6.jpg",
    authorName: "Jerry Lai",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343411/FckkmCCX0AEfpk-_lpzbth.png",
    authorName: "@_veganbeef",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343414/team-woody_gqt1wt.webp",
    authorName: "Woody",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/nish.4ddb0c7c_eggfhk.jpg",
    authorName: "Nishanta Dharmaseri",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343411/hao.0bc7b204_nl2nan.jpg",
    authorName: "Hao Fu",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/download_1_odflc3.jpg",
    authorName: "Anir Agarwal",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343413/qjLLqe3B_400x400_w5fpuh.jpg",
    authorName: "Chris Ackermann",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/james.6cca22de_ijnsdz.jpg",
    authorName: "James Petchey",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/Josh_Hannan.3de6ee8a_bkllde.jpg",
    authorName: "Josh Hannan",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/Jerome_Pimmel.a5951221_dadsqy.webp",
    authorName: "Jerome Pimmel",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343412/MiLeEL2a_400x400_y37fgg.jpg",
    authorName: "Andrea Muttoni",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/Bohao_Tang.9933a63c_ytbg2h.webp",
    authorName: "Bohao Tang",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677343410/ChrisProf.5642df4b_x5ydm7.webp",
    authorName: "Chris Sandico",
  },

  // Add more authors here
];

export default function AuthorsComing() {
  return (
    <div className="mt-4 flex space-y-4 flex-col w-full px-4">
      <h1 className="text-center py-4 font-bold text-debook-2">
        COMING SOON TO DEBOOK
      </h1>
      {authors.map((author) => (
        <div className="flex flex-col rounded-3xl h-[300px] bg-debook-2 ">
          <div className="h-[70%]">
            <img
              alt="author"
              className="h-full object-cover w-full  rounded-t-3xl"
              src={author.imgSrc}
            />
          </div>
          <div className="h-[30%] ml-4 mt-2 text-white">
            <p className="text-[20px]  font-bold">{author.authorName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
