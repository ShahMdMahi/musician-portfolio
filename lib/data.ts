import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Slack,
} from "lucide-react";
import heroBackground from "@/assets/images/background.jpg";
import heroProfile from "@/assets/images/profile.png";
import aboutImage from "@/assets/images/about.png";
import { gallery } from "@/assets/gallery/index";
import { news } from "@/assets/news/index";

export const siteConfig = {
  name: "Sakib Rafsan",
  description: "Indie Pop • Singer-Songwriter • Producer",
  metaTitle: "Sakib Rafsan - Indie Pop Singer-Songwriter",
  metaDescription: "A portfolio website for a musician",
  background: heroBackground,
  profile: heroProfile,
  aboutProfile: aboutImage,
  about1:
    "Sakib Rafsan is an indie pop singer-songwriter and producer based in Los Angeles, California. He has been writing songs for over 10 years and has released over 50 songs. Sakib has over 100K monthly listeners on Spotify.",
  about2:
    "Sakib has won several awards including a Grammy Award for Best New Artist in 2024, a Billboard Music Award for Top Streaming Artist in 2023, an MTV Video Music Award for Best Pop Video in 2023, and an American Music Award for Breakthrough Artist in 2022.",
};

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "New Releases", href: "#new-releases" },
  { name: "News", href: "#news" },
  { name: "Gallery", href: "#gallery" },
  { name: "My Team", href: "#my-team" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

export const aboutContent = {
  title: "About Sakib Rafsan",
  image: aboutImage,
  description:
    "Sakib Rafsan is an indie pop singer-songwriter and producer based in Los Angeles, California. With over a decade of experience in the music industry, John has crafted a unique sound that blends catchy melodies with introspective lyrics.",
  achievements: [
    "Released 3 critically acclaimed albums",
    "Performed at major music festivals including Coachella and Glastonbury",
    "Collaborated with renowned artists such as Taylor Swift and Ed Sheeran",
  ],
  quote:
    "Music is not just my career, it's my passion and my way of connecting with the world.",
};

export const aboutStats = [
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Songs Written" },
  { number: "100K+", label: "Monthly Listeners" },
];

export const newReleases = [
  {
    type: "Track",
    title: "Latest Track",
    spotifyId: "0afhq8XCExXpqazXczTSve",
    dark: true,
  },
  {
    type: "Track",
    title: "Latest Track",
    spotifyId: "7qiZfU4dY1lWllzX7mPBI3",
    dark: true,
  },
];

export const album = {
  title: "Latest Album",
  spotifyId: "3T4tUhGYeRNVUGevb0wThu",
  dark: true,
};

export const galleryImages = [
  gallery.gp1,
  gallery.gp2,
  gallery.gp3,
  gallery.gp4,
  gallery.gp5,
  gallery.gp6,
  gallery.gp7,
  gallery.gp8,
  gallery.gp9,
  gallery.gp10,
  gallery.gp11,
  gallery.gp12,
  gallery.gp13,
  gallery.gp14,
  gallery.gp15,
];

export const awards = [
  { year: "2024", title: "Grammy Award", category: "Best New Artist" },
  {
    year: "2023",
    title: "Billboard Music Award",
    category: "Top Streaming Artist",
  },
  { year: "2023", title: "MTV Video Music Award", category: "Best Pop Video" },
  {
    year: "2022",
    title: "American Music Award",
    category: "Breakthrough Artist",
  },
];

export const contactInfo = [
  { type: "email", value: "contact@johndoe.com" },
  { type: "phone", value: "+1 (555) 123-4567" },
  { type: "address", value: "Los Angeles, CA, USA" },
];

export const newsItems = [
  {
    date: "June 15, 2024",
    title: "World Tour Announcement",
    description:
      "Exciting news! Join us on our upcoming world tour across 20 cities.",
    image: news.n1,
  },
  {
    date: "May 28, 2024",
    title: "New Album Release",
    description:
      "Our latest album 'Harmony' is now available on all platforms.",
    image: news.n2,
  },
  {
    date: "May 1, 2024",
    title: "Grammy Nomination",
    description: "Honored to receive a Grammy nomination for Best New Artist.",
    image: news.n3,
  },
];

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com", Icon: Facebook },
  { name: "Twitter", href: "https://www.twitter.com", Icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com", Icon: Instagram },
  { name: "Youtube", href: "https://www.youtube.com", Icon: Youtube },
  { name: "Linkedin", href: "https://www.linkedin.com", Icon: Linkedin },
  { name: "Slack", href: "https://www.slack.com", Icon: Slack },
];

export const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Guitarist",
    image: gallery.gp1,
    bio: "Jane is a virtuoso guitarist with over 15 years of experience in various genres.",
  },
  {
    name: "John Smith",
    role: "Drummer",
    image: gallery.gp2,
    bio: "John's rhythmic precision and creativity have been the backbone of our sound for 8 years.",
  },
  {
    name: "Emily Brown",
    role: "Bassist",
    image: gallery.gp3,
    bio: "Emily's groovy bass lines and backing vocals add depth to our music.",
  },
  {
    name: "Michael Lee",
    role: "Keyboardist",
    image: gallery.gp4,
    bio: "Michael's versatility on keys brings a unique flavor to our arrangements.",
  },
];
