export const SCHOOL = {
  name: "Holy Fathima High School",
  shortName: "Holy Fathima",
  location: "New Hafeezpet",
  tagline: "Knowledge is Power",
  motto: "Education brings perfection · Education is life",
  established: 1989,
  medium: "English",
  address:
    "H.No. 4-161, Near Rahamaniya Masjid, Marthanda Nagar, New Hafeezpet, Hyderabad, Telangana 500049",
  phones: ["9391668092", "8121731765", "9391837245"],
  email: "holyfathimahighschool1992@gmail.com",
  whatsapp: "919391668092",
  mapEmbed:
    "https://www.google.com/maps?q=Marthanda+Nagar,+New+Hafeezpet,+Hyderabad,+Telangana+500049&output=embed",
  facebook: "https://www.facebook.com/profile.php?id=61560533938458",
  instagram: "https://www.instagram.com/holyfathimahighschool.mn/",
};

import marthandaImg from "@/assets/marthanda-nagar.jpg";
import adityaImg from "@/assets/aditya-nagar-branch.jpg";
import premImg from "@/assets/prem-nagar-branch.webp";
import kollurImg from "@/assets/kollur-branch.jpg";

export type Branch = {
  id: string;
  name: string;
  address: string;
  phones: string[];
  mapEmbed: string;
  image: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "marthanda-nagar",
    name: "Main Branch — Marthanda Nagar",
    address: "H.No. 4-161, Near Rahamaniya Masjid, Marthanda Nagar, New Hafeezpet, Hyderabad",
    phones: ["9391668092"],
    image: marthandaImg,
    mapEmbed:
      "https://www.google.com/maps?q=Marthanda+Nagar,+New+Hafeezpet,+Hyderabad&output=embed",
  },
  {
    id: "aditya-nagar",
    name: "Aditya Nagar Branch",
    address: "#3-450, Street No. 8, Near Rashideen Masjid, Aditya Nagar, Hyderabad",
    phones: ["9391668092"],
    image: adityaImg,
    mapEmbed:
      "https://www.google.com/maps?q=Aditya+Nagar,+New+Hafeezpet,+Hyderabad&output=embed",
  },
  {
    id: "prem-nagar",
    name: "Prem Nagar Branch",
    address: "Beside Seeyounu Church, Prem Nagar, Hyderabad",
    phones: ["9391668092"],
    image: premImg,
    mapEmbed:
      "https://www.google.com/maps?q=Prem+Nagar,+New+Hafeezpet,+Hyderabad&output=embed",
  },
  {
    id: "indra-reddy-nagar",
    name: "Indra Reddy Nagar Branch",
    address: "Phase-I, KCR Nagar, Kollur, Rangareddy Dist",
    phones: ["9391668092", "7416315599"],
    image: kollurImg,
    mapEmbed:
      "https://www.google.com/maps?q=Indra+Reddy+Nagar,+KCR+Nagar,+Kollur&output=embed",
  },
];
