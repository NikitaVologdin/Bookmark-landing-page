const features = [
  {
    title: "Simple Bookmarking",
    heading: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg",
    alt: "",
  },
  {
    title: "Speedy Searching",
    heading: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg",
    alt: "",
  },
  {
    title: "Easy Sharing",
    heading: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/images/illustration-features-tab-3.svg",
    alt: "",
  },
];

export interface IFeature {
  title: string;
  heading: string;
  paragraph: string;
  image: string;
  alt: string;
}

export default features;
